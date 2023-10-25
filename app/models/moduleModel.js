const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  enroll: {
    type: Boolean,
    default: false
  }
})

const module_ = mongoose.model('module', moduleSchema);

module.exports = module_