const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 100
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
})

const user = mongoose.model('user', userSchema)

module.exports = user