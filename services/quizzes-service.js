const quizzesDao = require('../daos/quizzes-dao')
const findAllQuizzes = async() => {
    return quizzesDao.findAllQuizzes()
    console.log("hereeee===>> ", await quizzesDao.findAllQuizzes())
}
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }