const { sendForgotPassword, resetPassword, changePassword } = require('../services/passwordSvc')

function sendForgotPasswordHandle(req, res) {
    sendForgotPassword(req).then(data => {
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
                message: "reset password link is sent to the user email",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function resetPasswordHandle(req, res) {
    resetPassword(req).then(data => {
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
                message: "successful change password",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function changePasswordHandle(req, res) {
    changePassword(req).then(data => {
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
                message: "successful change password",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = {
    sendForgotPasswordHandle,
    resetPasswordHandle,
    changePasswordHandle,
}