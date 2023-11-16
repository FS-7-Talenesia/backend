const main = require('./main')
const userCtrl = require('./userCtrl')
const loginCtrl = require('./loginCtrl')
const course = require('./course')
const emailCtrl = require('./emailCtrl')
const passwordCtrl = require('./passwordCtrl')
const submissionCtrl = require('./submissionCtrl')
const fileSubmissionCtrl = require('./fileSubmissionCtrl')
const multipleChoiceBankQuestionCtrl = require('./multipleChoiceBankQuestionCtrl')
const questionCtrl = require('./questionCtrl')
const choicesCtrl = require('./choicesCtrl')

module.exports = {
    main,
    userCtrl,
    loginCtrl,
    course,
    emailCtrl,
    passwordCtrl,
    submissionCtrl,
    fileSubmissionCtrl,
    multipleChoiceBankQuestionCtrl,
    questionCtrl,
    choicesCtrl
}

