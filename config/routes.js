const express = require('express')
const router = express.Router()
const fileHandler = require('./fileHandler')
const authorization = require('../app/services/middleware/userRole')
const { 
        main, 
        userCtrl, 
        loginCtrl, 
        courseCtrl,
        moduleCtrl,
        emailCtrl, 
        passwordCtrl,
        submissionCtrl, 
        fileSubmissionCtrl, 
        multipleChoiceBankQuestionCtrl, 
        questionCtrl, 
        choicesCtrl,
        multipleChoiceGradeCtrl 
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
router.get('/file',
    authorization.authorizeAdminAndTeacher,
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

//Multiple choice grade
router.get('/grade',
    authorization.authorizeAll,
    multipleChoiceGradeCtrl.listMultipleChoiceGradeHandle)
router.get('/grade/:id',
    authorization.authorizeAll,
    multipleChoiceGradeCtrl.findMultipleChoiceGradeByIdHandle)
router.post('/grade/create/',
    authorization.authorizeAll,
    multipleChoiceGradeCtrl.createMultipleChoiceGradeHandle)
router.put('/grade/update/:id',
    authorization.authorizeAll,
    multipleChoiceGradeCtrl.updateMultipleChoiceGradeHandle)
router.delete('/grade/delete/:id',
    authorization.authorizeAdminAndTeacher,
    multipleChoiceGradeCtrl.deleteMultipleChoiceGradeHandle)

//courses routes
router.get('/course', authorization.authorizeAll,
courseCtrl.getCoursesHandle)
router.get('/course/:id', authorization.authorizeAll,
courseCtrl.getCourseByIdHandle)
router.post('/course', authorization.authorizeAdmin,
courseCtrl.createCourseHandle)
router.put('/course/:id', authorization.authorizeAdmin,
courseCtrl.updateCourseHandle)
router.delete('/course/:id', authorization.authorizeAdmin,
courseCtrl.deleteCourseHandle)
router.put('/user/:userId/course/:courseId/enroll', courseCtrl.enrollCourseHandle)
router.put('/user/:userId/course/:courseId/unenroll', courseCtrl.unenrollCourseHandle)
router.put('/user/:userId/course/:courseId/complete', courseCtrl.completeStatusHandle)
// router.delete('/course/:id', courseCtrl.deleteCourseAllHandle)

// module routes

router.get('/course/:courseId/module/', authorization.authorizeAll,
moduleCtrl.getAllModulesHandle)
router.get('/course/:courseId/module/:moduleId', authorization.authorizeAll,
moduleCtrl.getModuleByIdHandle)
router.post('/course/:courseId/module', authorization.authorizeAdminAndTeacher,
moduleCtrl.createModuleHandle)
router.delete('/course/:courseId/module/:moduleId', authorization.authorizeAdminAndTeacher, 
moduleCtrl.deleteModuleHandle)

//api error handler
router.get('/', main.onUp)
router.use(main.onLost)
router.use(main.onError)

module.exports = router

