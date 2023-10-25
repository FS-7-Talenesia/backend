const { listUser, findUserById, createUser, updateUser, deleteUser  } = require('../services/userSvc')

function listUserHandle(req, res) {
    listUser(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                msg: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function findUserByIdHandle(req, res) {
    findUserById(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                msg: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function createUserHandle(req, res) {
    createUser(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                msg: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function updateUserHandle(req, res) {
    updateUser(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                msg: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                msg: "Update success"
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function deleteUserHandle(req, res) {
    deleteUser(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                msg: data.message,
                error: data.error
            })
        } else {
            res.status(200).json({
                status: "OK",
                msg: "Delete success"
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = {
    listUserHandle, 
    createUserHandle, 
    updateUserHandle, 
    deleteUserHandle,
    findUserByIdHandle
}