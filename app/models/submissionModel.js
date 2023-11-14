const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
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
    }]
})

const submission = mongoose.model('submission', submissionSchema)

module.exports = submission