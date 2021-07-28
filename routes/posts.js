import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

router.get('/search', postCtrl.searchPosts)
router.get('/:page', postCtrl.paginatedIndex)
router.get('/details/:id', postCtrl.show)

// ========= Protected Routes ========= 

router.use(decodeUserFromToken)
router.get('/users/:id', checkAuth, postCtrl.getPostsByUserId)
router.post('/', checkAuth, postCtrl.create)
router.post('/:id', checkAuth, postCtrl.createComment)
router.put('/:id', checkAuth, postCtrl.update)
router.put(
    '/:post_id/comments/:comment_id',
    checkAuth,
    postCtrl.markCommentAsSolution
)
router.delete('/:id', checkAuth, postCtrl.delete)
router.delete(
    '/:post_id/comments/:comment_id',
    checkAuth,
    postCtrl.deleteComment
)

export {
    router
}