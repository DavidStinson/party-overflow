import { User } from '../models/user.js'

const getTopUsers = async (req, res) => {
    try {
        const users = await User.find()
        .select('_id handle avatar solution_count')
        .sort({ solution_count: -1 })
        .limit(5)
        res.send(users)
    } catch (error) {
        return res.status(500).send(error.message, 'Could not find users.')
    }
}

export {
    getTopUsers,
}
