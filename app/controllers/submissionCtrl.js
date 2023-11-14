const { listSubmission, listSubmissionById, createSubmission, updateSubmission, deleteSubmission } = require('../services/submissionSvc')

function listSubmissionHandle(req, res) {
    listSubmission(req).then(data => {
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

function listSubmissionByIdHandle(req, res) {
    listSubmissionById(req).then(data => {
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

function createSubmissionHandle(req, res) {
    createSubmission(req).then(data => {
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
                message: "successful upload Submission",
                data
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function updateSubmissionHandle(req, res) {
    updateSubmission(req).then(data => {
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
                message: "successful update Submission"
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

function deleteSubmissionHandle(req, res) {
    deleteSubmission(req).then(data => {
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
                message: "successful delete Submission",
            })
        }
    }).catch(error => {
        res.status(400).json({
            error: error.message
        })
    })
}

module.exports = { 
    listSubmissionHandle,
    listSubmissionByIdHandle,
    createSubmissionHandle,
    updateSubmissionHandle,
    deleteSubmissionHandle, 
}