const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
    type_submission: {
        type: String
    },
    deadlines: {
        type: Date,
    },
    repeat: {
        type: Boolean,
    },
    max_repeat: {
        type: Number,
    },
    open: {
        type: Boolean,
    },
    fileSubmission_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fileSubmission'
    }],
    multipleChoiceBankQuestion_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'multipleChoiceBankQuestion'
    }]
})

const submission = mongoose.model('submission', submissionSchema)

module.exports = submission