const mongoose = require('mongoose')
const questionsSchema = require('../questions/questions-schema')
const quizAttempts = mongoose.Schema({
   score: String,
   quiz: {type: String, ref: 'QuizzesModel'},
   answers: [questionsSchema]
}, {collection: 'quizAttempts'})
module.exports = quizAttempts
