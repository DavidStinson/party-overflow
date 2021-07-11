const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET  

function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

function getTopUsers(req, res) {
    User.find()
        .select('_id name avatar solution_count')
        .limit(5)
        .sort({ solution_count: -1 })
        .then(users => { res.json(users) })
        .catch(error => { res.json(error) })
}

async function register(req, res) {
    const user = new User(req.body)
    try {
        await user.save()
        const token = createJWT(user)
        res.json({ token })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(401).json({ error: 'bad credentials' })
        user.comparePassword(req.body.pw, (error, isMatch) => {
            if (isMatch) {
                const token = createJWT(user)
                res.json({ token })
            } else {
                return res.status(401).json({ error: 'bad credentials' })
            }
        })
    } catch (error) {
        return res.status(401).json(error)
    }
}

module.exports = {
    register,
    login,
    getTopUsers
}