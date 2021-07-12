const Post = require('../models/post')
const User = require('../models/user')

async function createPost(req, res) {
    try {
        const post = await new Post(req.body)
        await post.save()
        await User.updateOne(
            { _id: req.body.added_by },
            { $push: { posts: post } }
        )
        return res.status(201).json({ post })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

function getRecent(req, res) {
    const limitNum = 3
    const skipCount = parseInt(req.params.page) * parseInt(limitNum)
    Post.find({})
        .populate([
            {
                model: 'User',
                path: 'user_id',
                select: '_id name avatar'
            }
        ])
        .limit(limitNum)
        .skip(skipCount)
        .sort({ createdAt: 'desc' }).exec()
        .then(posts => { res.json(posts) })
        .catch(err => { res.json(err) })
}

function updatePost(req, res) {
    console.log(req.params.id)
    const updateData = { is_resolved: true }
    Post.findByIdAndUpdate(req.params.id, updateData, { new: true })
        .then(post => { res.json(post) })
        .catch(err => { res.json(err) })
}

function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id)
        .then(post => { res.json(post) })
        .catch(err => { res.json(err) })
}



module.exports = {
    createPost,
    getRecent,
    updatePost,
    deletePost,
}




