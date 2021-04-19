const quizAttemptDao = require('../daos/quiz-attempts-dao')
module.exports = (app) => {
   app.post('/api/quizzes/:qid/attempts', async (req, res) =>{
       const quizId = req.params.qid
       const attempReq = req.body
       const attempt = await quizAttemptDao.createAttempt( quizId, attempReq)
       
       console.log("attempt======>>>>", attempt)
       res.send(attempReq)
           
    })
   
   app.get('/api/quizzes/:qid/attempts', (req, res) =>
       quizAttemptDao.findAttemptsForQuiz(req.params.qid)
           .then(attempts => res.send(attempts)))
}
