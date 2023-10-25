const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  enroll: {
    type: boolean,
    required: true,
    default: false,
  }

})

const course = mongoose.model('course', courseSchema);

module.exports = course;
