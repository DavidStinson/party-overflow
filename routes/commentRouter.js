const router = require('express').Router()
const commentCtrl = require('../controllers/comment')

// ========= Public Routes ========= 

router.post('/:post_id', commentCtrl.createComment)
router.delete('/:post_id/:comment_id', commentCtrl.deleteComment)
router.put('/:post_id/:comment_id', commentCtrl.updateComment)

// ========= Protected Routes ========= 

router.use(require('../config/auth'))
// router.post('/:post_id', checkAuth, commentCtrl.createComment)
// router.delete('/:post_id/:comment_id', checkAuth, commentCtrl.deleteComment)
// router.put('/:post_id/:comment_id', checkAuth, commentCtrl.updateComment)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router