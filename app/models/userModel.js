const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        maxLength: 80
    },
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    age: {
        type: Number,
        required: true,
        maxLength: 100
    },
    gender: {
        type: String,
        required: true,
        maxLength: 1
    },
    email: {
        type: String,
        required: true,
        maxLength: 30
    },
    role: {
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