const Post = require('../models/post')
const User = require('../models/user')

async function createComment(req, res) {
    try {
        const post = Post.findById(req.params.id)
        post.comments.push(req.body)
        post.save()
        res.json(post)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

async function deleteComment(req, res) {
    try {
        const post = Post.findById(req.params.post_id)
        const idx = post.comments.findIndex((comment) => comment._id === req.params.comment_id)
        const removedComment = post.comments.splice(idx, 1)
        post.save()
        res.json(removedComment)
    } catch (err) {
        res.json(err)
    }
}

async function updateComment(req, res) {
    try {
        const post = Post.findById(req.params.post_id)
        const idx = post.comments.findIndex((comment) => comment._id === req.params.comment_id)
        const updatedComment = post.comments[idx]
        updatedComment.is_solution = true
        post.save()
        res.json(updatedComment)
    } catch (err) {
        res.json(err)
    }
}

async function createPost(req, res) {
    try {
        const post = await new Post(req.body)
        await post.save()
        await User.updateOne(
            { _id: req.body.user_id },
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

    createComment,
    deleteComment,
    updateComment
}




