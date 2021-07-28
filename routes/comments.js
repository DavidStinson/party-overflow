import { Router } from 'express'
import * as commentCtrl from '../controllers/comments.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes =========
router.use(decodeUserFromToken)
router.post('/:post_id', checkAuth, commentCtrl.createComment)
router.delete('/:post_id/:comment_id', checkAuth, commentCtrl.deleteComment)
router.put('/:comment_id/:post_id/', checkAuth, commentCtrl.updateComment)

export {
    router
}
