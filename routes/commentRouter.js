import { Router } from 'express'
import * as commentCtrl from '../controllers/comment.js'
import { decodeUserFromToken } from '../middleware/auth.js'


const router = Router()

// ========= Public Routes ========= 

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/:post_id', checkAuth, commentCtrl.createComment)
router.delete('/:post_id/:comment_id', checkAuth, commentCtrl.deleteComment)
router.put('/:comment_id/:post_id/:user_id', checkAuth, commentCtrl.updateComment)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

export {
    router
}