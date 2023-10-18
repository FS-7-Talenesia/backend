const express = require('express')
const router = express.Router()
const userImgHandler = require('./userImgHandler')
const {userCtrl} = require('../app/controllers/index')

//user Routes
router.get('/user', userCtrl.listUserHandle)
router.get('/user/:id', userCtrl.findUserByIdHandle)
router.post('/user/create/', userCtrl.createUserHandle)
router.put('/user/update/:id', userImgHandler, userCtrl.updateUserHandle)
router.delete('/user/delete/:id', userCtrl.deleteUserHandle)

module.exports = router