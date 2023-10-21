const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({
  module_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'module',
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  due_date: {
    type: Date,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String
  },
  status: {
    type: String,
    enum: ['NOT_SUBMITTED', 'SUBMITTED'],
    default: 'NOT_SUBMITTED'
  },
  grades: {
    type: Number
  },
  request_for_review: {
    type: Boolean
  },
  countdown: {
    type: Number
  },
  question_navigation: {
    type: Boolean
  },
  allow_attempt: {
    type: Boolean
  },
  max_attemp: {
    type: Number
  }
})

const assignment = mongoose.model('assignment', assignmentSchema)

module.exports = assignment