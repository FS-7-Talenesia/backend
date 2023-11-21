const { listMultipleChoiceGrade, findMultipleChoiceGradeById, createMultipleChoiceGrade, updateMultipleChoiceGrade, deleteMultipleChoiceGrade } = require('../services/multipleChoiceGradeSvc')

function listMultipleChoiceGradeHandle(req, res) {
    listMultipleChoiceGrade(req).then(data => {
        if (data.response) {
            res.status(data.response).json({
                response: data.response,
                status: data.status,
                message: data.message,
                error: data.error
            })
        } else {
            console.log(data)
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

function findMultipleChoiceGradeByIdHandle(req, res) {
    findMultipleChoiceGradeById(req).then(data => {
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

function createMultipleChoiceGradeHandle(req, res) {
    createMultipleChoiceGrade(req).then(data => {
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
                message: "successful create multiple choice grade",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function updateMultipleChoiceGradeHandle(req, res) {
    updateMultipleChoiceGrade(req).then(data => {
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
                message: "successful update multiple choice grade",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function deleteMultipleChoiceGradeHandle(req, res) {
    deleteMultipleChoiceGrade(req).then(data => {
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
                message: "successful delete multiple choice grade",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = {
    listMultipleChoiceGradeHandle,
    findMultipleChoiceGradeByIdHandle,
    createMultipleChoiceGradeHandle,
    updateMultipleChoiceGradeHandle,
    deleteMultipleChoiceGradeHandle,
}