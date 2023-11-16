const express = require('express')
const router = express.Router()
const fileHandler = require('./fileHandler')
const authorization = require('../app/services/middleware/userRole')
const { main, userCtrl, loginCtrl, courses, emailCtrl, passwordCtrl, submissionCtrl, fileSubmissionCtrl, multipleChoiceBankQuestionCtrl, questionCtrl, choicesCtrl } = require('../app/controllers/index')

//Login
router.post('/login', loginCtrl.loginHandle)

//User routes
router.get('/user', 
    userCtrl.listUserHandle)
router.get('/user/:id', 
    userCtrl.findUserByIdHandle)
router.post('/user/create/',
    authorization.authorizeAdmin,
    userCtrl.createUserHandle)
router.put('/user/update/:id',
    authorization.authorizeAll, 
    fileHandler.imageUpload,
    userCtrl.updateUserHandle)
router.delete('/user/delete/:id',
    authorization.authorizeAdmin, 
    userCtrl.deleteUserHandle)

//User verify email
router.post('/send/verify/:id',
    authorization.authorizeAll,
    emailCtrl.sendEmailVerifyHandle)
router.post('/email/verify/:token_email_verify',
    authorization.authorizeAll,
    emailCtrl.emailVerifyHandle)

//User password handle
router.post('/send/forgot-password', 
    passwordCtrl.sendForgotPasswordHandle)
router.post('/reset/password/:token_reset_password', 
    passwordCtrl.resetPasswordHandle)
router.post('/change/password/:id',
    authorization.authorizeAll,
    passwordCtrl.changePasswordHandle)

//Submission
router.get('/submission',
    authorization.authorizeAdminAndTeacher,
    submissionCtrl.listSubmissionHandle)
router.get('/submission/:id',
    authorization.authorizeAdminAndTeacher,
    submissionCtrl.listSubmissionByIdHandle)
router.post('/submission/create',
    authorization.authorizeAdminAndTeacher,
    submissionCtrl.createSubmissionHandle)
router.put('/submission/update/:id',
    authorization.authorizeAdminAndTeacher,
    submissionCtrl.updateSubmissionHandle)
router.delete('/submission/delete/:id',
    authorization.authorizeAdminAndTeacher,
    submissionCtrl.deleteSubmissionHandle)

//File submission
router.get('/file/list',
    authorization.authorizeAll,
    fileSubmissionCtrl.listFileHandle)
router.post('/file/upload/submission/:submission_id',
    authorization.authorizeAll,
    fileHandler.fileUpload,
    fileSubmissionCtrl.uploadFileHandle)
router.put('/file/update/submission/:submission_id',
    authorization.authorizeAll,
    fileHandler.fileUpload,
    fileSubmissionCtrl.updateFileHandle)
router.delete('/file/delete/:id',
    authorization.authorizeAll,
    fileSubmissionCtrl.deleteFileHandle)

//Multiple choice  bank question
router.get('/bank-question',
    multipleChoiceBankQuestionCtrl.listBankQuestionHandle)
router.get('/bank-question/:id',
    multipleChoiceBankQuestionCtrl.findBankQuestionByIdHandle)
router.post('/bank-question/create/',
    multipleChoiceBankQuestionCtrl.createBankQuestionHandle)
router.put('/bank-question/update/:id',
    multipleChoiceBankQuestionCtrl.updateBankQuestionHandle)
router.delete('/bank-question/delete/:id',
    multipleChoiceBankQuestionCtrl.deleteBankQuestionHandle)

//Question
router.get('/question',
    questionCtrl.listQuestionHandle)
router.get('/question/:id',
    questionCtrl.findQuestionByIdHandle)
router.post('/question/create/:multiple_choice_question_bank_id',
    questionCtrl.createQuestionHandle)
router.put('/question/update/:id',
    questionCtrl.updateQuestionHandle)
router.delete('/question/delete/:id',
    questionCtrl.deleteQuestionHandle)

//Choices
router.get('/choices',
    choicesCtrl.listChoicesHandle)
router.get('/choices/:id',
    choicesCtrl.findChoicesByIdHandle)
router.post('/choices/create/:question_id',
    choicesCtrl.createChoicesHandle)
router.put('/choices/update/:id',
    choicesCtrl.updateChoicesHandle)
router.delete('/choices/delete/:id',
    choicesCtrl.deleteChoicesHandle)

// courses routes
// router.get('/course/:id', courses.getCourses)
// router.post('/course', courses.createCourse)
// router.put('/course/:id', courses.updateCourse)
// router.delete('/course/:id', courses.deleteCourse)

//api error handler
router.get('/', main.onUp)
router.use(main.onLost)
router.use(main.onError)

module.exports = router

