const {sendEmailVerify, emailVerify} = require('../services/emailSvc')

function sendEmailVerifyHandle(req, res) {
    sendEmailVerify(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                response: data.response,
                status: data.status,
                message: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                message: "Verification link is sent to the user email",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function emailVerifyHandle(req, res) {
    emailVerify(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                response: data.response,
                status: data.status,
                message: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                message: "Email has been verified",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = {
    sendEmailVerifyHandle,
    emailVerifyHandle
}