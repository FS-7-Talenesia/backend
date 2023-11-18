const express = require('express')
const router = express.Router()
const fileHandler = require('./fileHandler')
const authorization = require('../app/services/middleware/userRole')
const { 
        main, 
        userCtrl, 
        loginCtrl, 
        courseCtrl, 
        emailCtrl, 
        passwordCtrl, 
        moduleCtrl,   
        submissionCtrl, 
        fileSubmissionCtrl, 
        multipleChoiceBankQuestionCtrl, 
        questionCtrl, 
        choicesCtrl 
    } = require('../app/controllers/index')

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
    submissionCtrl.createSubmissionForFileHandle)
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
    authorization.authorizeAdminAndTeacher,
    multipleChoiceBankQuestionCtrl.listBankQuestionHandle)
router.get('/bank-question/:id',
    authorization.authorizeAdminAndTeacher,
    multipleChoiceBankQuestionCtrl.findBankQuestionByIdHandle)
router.post('/bank-question/create/',
    authorization.authorizeAdminAndTeacher,
    multipleChoiceBankQuestionCtrl.createBankQuestionHandle)
router.put('/bank-question/update/:id',
    authorization.authorizeAdminAndTeacher, 
    multipleChoiceBankQuestionCtrl.updateBankQuestionHandle)
router.delete('/bank-question/delete/:id',
    authorization.authorizeAdminAndTeacher, 
    multipleChoiceBankQuestionCtrl.deleteBankQuestionHandle)

//Question
router.get('/question',
    authorization.authorizeAdminAndTeacher,
    questionCtrl.listQuestionHandle)
router.get('/question/:id',
    authorization.authorizeAdminAndTeacher,
    questionCtrl.findQuestionByIdHandle)
router.post('/question/create/:multiple_choice_question_bank_id',
    authorization.authorizeAdminAndTeacher,
    questionCtrl.createQuestionHandle)
router.put('/question/update/:id',
    authorization.authorizeAdminAndTeacher,
    questionCtrl.updateQuestionHandle)
router.delete('/question/delete/:id',
    authorization.authorizeAdminAndTeacher,
    questionCtrl.deleteQuestionHandle)

//Choices
router.get('/choices',
    authorization.authorizeAdminAndTeacher,
    choicesCtrl.listChoicesHandle)
router.get('/choices/:id',
    authorization.authorizeAdminAndTeacher,
    choicesCtrl.findChoicesByIdHandle)
router.post('/choices/create/:question_id',
    authorization.authorizeAdminAndTeacher,
    choicesCtrl.createChoicesHandle)
router.put('/choices/update/:id',
    authorization.authorizeAdminAndTeacher,
    choicesCtrl.updateChoicesHandle)
router.delete('/choices/delete/:id',
    authorization.authorizeAdminAndTeacher,
    choicesCtrl.deleteChoicesHandle)

//courses routes
router.get('/course', courseCtrl.getCoursesHandle)
router.get('/course/:id', courseCtrl.getCourseByIdHandle)
router.post('/course', courseCtrl.createCourseHandle)
router.put('/course/:id', courseCtrl.updateCourseHandle)
router.delete('/course/:id', courseCtrl.deleteCourseHandle)
router.put('/course/:id/enroll', courseCtrl.enrollCourseHandle)
router.put('/course/:id/unenroll', courseCtrl.unEnrollCourseHandle)
router.put('/course/:id/complete', courseCtrl.completeStatusHandle)
// router.delete('/course/:id', courseCtrl.deleteCourseAllHandle)

// module routes
router.get('/course/:courseId/module/', moduleCtrl.getAllModules)
router.get('/course/:courseId/module/:moduleId', moduleCtrl.getModuleDetail)
router.post('/course/:courseId/module', moduleCtrl.createNewModule)
// router.delete('/course/:courseId/module/:moduleId', moduleCtrl.deleteModule)

//api error handler
router.get('/', main.onUp)
router.use(main.onLost)
router.use(main.onError)

module.exports = router

