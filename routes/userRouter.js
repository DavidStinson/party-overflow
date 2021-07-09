const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

/*---------- Public Routes ----------*/

router.get('/', userCtrl.getTopUsers)
router.post('/signup', userCtrl.register)
router.post('/login', userCtrl.login)

module.exports = router