const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 30,
        minLength: 3
    },
    password: {
        type: String,
        maxLength: 80,
        minLength: 8,
    },
    name: {
        type: String,
        maxLength: 100,
        minLength: 3
    },
    age: {
        type: Number,
        maxLength: 100
    },
    gender: {
        type: String,
        maxLength: 1
    },
    email: {
        type: String,
        maxLength: 30
    },
    role: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
    },
    token_email_verify: {
        type: String,
    },
    token_email_verify_expires: {
        type: String,
    },
    token_reset_password: {
        type: String,
    },
    token_reset_password_expires: {
        type: String,
    },
})

const user = mongoose.model('user', userSchema)

module.exports = user