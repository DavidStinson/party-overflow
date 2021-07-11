const router = require('express').Router()
const postCtrl = require('../controllers/post')

// ========= Public Routes ========= 

router.get('/:page', postCtrl.getRecent)

// ========= Protected Routes ========= 

//Posts
router.use(require('../config/auth'))
router.post('/', checkAuth, postCtrl.createPost)
router.put('/:id', checkAuth, postCtrl.updatePost)
router.delete('/:id', checkAuth, postCtrl.deletePost)


//Comments
router.post('/:post_id/comments', checkAuth, commentCtrl.createComment)
router.delete('/:post_id/:comment_id', checkAuth, commentCtrl.deleteComment)
router.put('/:post_id/:comment_id', checkAuth, commentCtrl.updateComment)



function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router