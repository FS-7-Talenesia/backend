const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    number: {
        type: Number
    },
    question_text: {
        type:String,
    }, 
    choices_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'choices'
    }]
})

const question = mongoose.model('question', questionSchema)

module.exports = question