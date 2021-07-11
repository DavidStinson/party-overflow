const router = require('express').Router()
const postCtrl = require('../controllers/post')

// ========= Public Routes ========= 

router.get('/:page', postCtrl.getRecent)

router.post('/', postCtrl.createPost)
router.put('/:id', postCtrl.updatePost)
router.delete('/:id', postCtrl.deletePost)

// ========= Protected Routes ========= 

//Posts
router.use(require('../config/auth'))
// router.post('/', checkAuth, postCtrl.createPost)
// router.put('/:id', checkAuth, postCtrl.updatePost)
// router.delete('/:id', checkAuth, postCtrl.deletePost)


function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router