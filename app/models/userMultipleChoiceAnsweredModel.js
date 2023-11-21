const mongoose = require('mongoose')

const userMultipleChoiceAnsweredSchema = new mongoose.Schema({
    user_answered: {
        type: String,
    },
})

const userMultipleChoiceAnswered = mongoose.model('userMultipleChoiceAnswered', userMultipleChoiceAnsweredSchema)

module.exports = userMultipleChoiceAnswered