const mongoose = require('mongoose')

const multipleChoiceQuestionBankSchema = new mongoose.Schema({
    question_name: {
        type: String,
    },
    question_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question',
        choices_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'choices',
        }]
    }],
    
})

const multipleChoiceQuestionBank = mongoose.model('multipleChoiceQuestionBank', multipleChoiceQuestionBankSchema)

module.exports = multipleChoiceQuestionBank