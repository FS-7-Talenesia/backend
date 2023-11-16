const { listBankQuestion, findBankQuestionById, createBankQuestion, updateBankQuestion, deleteBankQuestion } = require('../services/multipleChoiceBankQuestionSvc')

function listBankQuestionHandle(req, res) {
    listBankQuestion(req).then(data => {
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
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function findBankQuestionByIdHandle(req, res) {
    findBankQuestionById(req).then(data => {
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
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function createBankQuestionHandle(req, res) {
    createBankQuestion(req).then(data => {
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
                message: "successful create bank question",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function updateBankQuestionHandle(req, res) {
    updateBankQuestion(req).then(data => {
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
                message: "successful update bank question",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function deleteBankQuestionHandle(req, res) {
    deleteBankQuestion(req).then(data => {
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
                message: "successful delete bank question",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = { 
    listBankQuestionHandle,
    findBankQuestionByIdHandle,
    createBankQuestionHandle,
    updateBankQuestionHandle,
    deleteBankQuestionHandle, 
}