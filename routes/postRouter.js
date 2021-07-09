const router = require('express').Router()
const postCtrl = require('../controllers/post')

// Public Routes
router.get('/:page', postCtrl.getRecent)

// Protected Routes
router.use(require('../config/auth'))
router.post('/', checkAuth, postCtrl.create)
router.put('/:id', checkAuth, postCtrl.update)
router.delete('/:id', checkAuth, postCtrl.delete)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router