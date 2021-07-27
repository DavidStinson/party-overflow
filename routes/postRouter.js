import { Router } from 'express'
import * as postCtrl from '../controllers/post.js'
import { decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 

router.get('/:page', postCtrl.getRecent)
router.get('/questions/search', postCtrl.searchPosts)
router.get('/details/:id', postCtrl.getPostById)

// ========= Protected Routes ========= 

router.use(require(decodeUserFromToken)
router.post('/', checkAuth, postCtrl.createPost)
router.put('/:id', checkAuth, postCtrl.updatePost)
router.delete('/:id', checkAuth, postCtrl.deletePost)
router.get('/user/:user_id', checkAuth, postCtrl.getPostsByUserId)


function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

export {
    router
}