import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

const createJWT = (user) => {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

const getTopUsers = async (req, res) => {
    try {
        const users = await User.find().select('_id handle avatar solution_count').limit(5).sort({ solution_count: -1 })
        res.send(users)
    } catch (error) {
        return res.status(500).send(error.message, 'Could not find users.')
    }
}

const register = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = createJWT(user)
        res.json({ token })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(401).json({ error: 'bad credentials' })
        user.comparePassword(req.body.password, (error, isMatch) => {
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

export {
    register,
    login,
    getTopUsers,
}