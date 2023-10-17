const express = require('express')
const router = express.Router()
const multer = require('./fileHandler')
const {userCtrl} = require('../app/controllers/index')

//user Routes
router.get('/user-list', userCtrl.listUserHandle)
// router.get('/user-list/:videoId/', userCtrl.userListByVideoId)
router.post('/user', userCtrl.createUserHandle)
router.put('/user/:id', userCtrl.updateUserHandle)
router.delete('/user/:id', userCtrl.deleteUserHandle)

module.exports = router