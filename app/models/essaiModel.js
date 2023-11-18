const mongoose = require('mongoose')
const Schema = mongoose.Schema

const essaiSchema = new mongoose.Schema({
    number: {
        type: String,
    },
    question: {
        type: String,
    },
    value: {
        type: Number,
        maxLength: 100,
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
})

const essai = mongoose.model('essai', essaiSchema)

module.exports = essai