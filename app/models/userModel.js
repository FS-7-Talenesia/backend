const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        maxLength: 80,
        minLength: 8,
    },
    name: {
        type: String,
        required: true,
        maxLength: 100,
        minLength: 3
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
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    img: {
        type: String,
        required: true
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