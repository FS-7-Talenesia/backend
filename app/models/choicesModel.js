const mongoose = require('mongoose')

const choicesSchema = new mongoose.Schema({
    letter: {
        type: String
    },
    answer_text: {
        type: String
    },
    correct: {
        type: Boolean
    },
})

const choices = mongoose.model('choices', choicesSchema)

module.exports = choices