const express = require('express')
const router = express.Router()
const userImgHandler = require('./userImgHandler')
const {userCtrl, loginCtrl} = require('../app/controllers/index')
const authorization = require('./userRole')

//Login
router.post('/login', loginCtrl.loginHandle)

//User routes
router.get('/user', userCtrl.listUserHandle)
router.get('/user/:id', userCtrl.findUserByIdHandle)
router.post('/user/create/',
    authorization.authorizeAdmin,
    userCtrl.createUserHandle)
router.put('/user/update/:id', userImgHandler, userCtrl.updateUserHandle)
router.delete('/user/delete/:id', userCtrl.deleteUserHandle)

module.exports = router