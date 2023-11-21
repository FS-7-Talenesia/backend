const mongoose = require('mongoose')

const multipleChoiceGradeSchema = new mongoose.Schema({
    user_answered: {
        type: String
    },
    // choices_id: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'choices',
    // }]
})

const multipleChoiceGrade = mongoose.model('multipleChoiceGrade', multipleChoiceGradeSchema)

module.exports = multipleChoiceGrade