const router = require('express').Router()
const commentCtrl = require('../controllers/comment')

// Protected Routes
router.use(require('../config/auth'))
router.post('/', checkAuth, commentCtrl.create)
router.delete('/:id', checkAuth, commentCtrl.delete)
router.put('/:id', checkAuth, commentCtrl.update)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'})
}

module.exports = router