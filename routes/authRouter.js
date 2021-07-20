const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')

/*---------- Public Routes ----------*/

router.get('/', authCtrl.getTopUsers)
router.post('/signup', authCtrl.register)
router.post('/login', authCtrl.login)


// ========= Protected Routes ========= 
router.use(require('../config/auth'))

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}


module.exports = router