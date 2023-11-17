const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
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