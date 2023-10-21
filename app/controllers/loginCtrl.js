const {userLogin} = require('../services/loginSvc')

function loginHandle(req, res) {
    userLogin(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                msg: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                msg:"Successful login",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = {
    loginHandle
}