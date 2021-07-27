import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js' 

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', authCtrl.getTopUsers)
router.post('/signup', authCtrl.register)
router.post('/login', authCtrl.login)


// ========= Protected Routes ========= 
router.use(require('../config/auth'))

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}


export {
   router 
}