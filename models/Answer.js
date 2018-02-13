const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answers: {
    type: Array
  },
  score: {
    type: Number
  }
})

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;