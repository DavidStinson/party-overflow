import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

router.get('/:page', postCtrl.getRecent)
router.get('/questions/search', postCtrl.searchPosts)
router.get('/details/:id', postCtrl.getPostById)

// ========= Protected Routes ========= 

router.use(decodeUserFromToken)
router.post('/', checkAuth, postCtrl.createPost)
router.put('/:id', checkAuth, postCtrl.updatePost)
router.delete('/:user_id/:post_id', checkAuth, postCtrl.deletePost)
router.get('/user/:user_id', checkAuth, postCtrl.getPostsByUserId)

export {
    router
}