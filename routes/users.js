import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// ========== Public Routes ===========

router.get('/top-users', usersCtrl.getTopUsers)

// ========= Protected Routes ========= 


export {
   router 
}