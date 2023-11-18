const joi = require("joi")

function password(args) {
    try {
        const passwordSchema = joi.string().regex(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/).required()
        const validate = passwordSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('minimum password 8 character')
    }
}

function email(args) {
    try {
        const emailSchema = joi.string().email().required()
        const validate = emailSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('email is invalid')
    }
}

function role(args) {
    try {
        const roleSchema = joi.string().valid(['admin', 'teacher', 'student']).required()
        const validate = roleSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('role is invalid')
    }
}

function username(args) {
    try {
        const usernameSchema = joi.string().min(3).max(10).required()
        const validate = usernameSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('minimum username has 3 character and max is 10 character')
    }
}

function name(args) {
    try {
        const nameSchema = joi.string().min(3).max(100).required()
        const validate = nameSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('minimum name has 3 character and max is 100 character')
    }
}

function age(args) {
    try {
        const ageSchema = joi.string().max(100).required()
        const validate = ageSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('max age is 100')
    }
}

function gender(args) {
    try {
        const genderSchema = joi.string().valid(['male', 'female']).required()
        const validate = genderSchema.validate(args)
        return validate.value
    } catch (error) {
        throw new Error('gender is invalid')
    }
}

module.exports = {
    password,
    email,
    role,
    username,
    name,
    age,
    gender,
}