const nodemailer = require('nodemailer')
require('dotenv').config()

async function sendEmail(user) {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const emailOptions = {
        from: 'fs-7 <noreply@mail.accounts.fs-7_LMS.com>',
        to: user.email,
        subject: 'Verify Email',
        html:
        `
            <p>Hi ${user.email},</p>
            <p>Please click the following link to verify your email:</p>
            <p><a href="http://localhost:8000/email/verify/${user.token_email_verify}">http://localhost:8000/email/verify/${user.token_email_verify}</a></p>
            <p>The link will expire in fifteen minutes.</p>
        `,
    }

    await transport.sendMail(emailOptions)
}

async function sendForgot(user) {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const emailOptions = {
        from: 'fs-7 <noreply@mail.accounts.fs-7_LMS.com>',
        to: user.email,
        subject: 'Forgot Password',
        html:
            `
            <p>Hi ${user.email},</p>
            <p>Please click the following link to create new password:</p>
            <p><a href="http://localhost:8000/change/password/${user.token_reset_password}">http://localhost:8000/change/password/${user.token_reset_password}</a></p>
            <p>The link will expire in fifteen minutes.</p>
        `,
    }

    await transport.sendMail(emailOptions)
}

module.exports = {
    sendEmail,
    sendForgot
}