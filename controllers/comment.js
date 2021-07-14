const Post = require('../models/post')

async function createComment(req, res) {
    try {
        const post = await Post.findById(req.params.post_id)
        post.comments.push(req.body)
        await post.save()
        const newComment = post.comments[post.comments.length - 1]
        res.json(newComment)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

async function deleteComment(req, res) {
    try {
        const post = await Post.findById(req.params.post_id)
        //update
        const idx = post.comments.findIndex((comment) => parseInt(comment._id) === parseInt(req.params.comment_id))
        const removedComment = post.comments.splice(idx, 1)
        await post.save()
        res.json(removedComment)
    } catch (err) {
        res.json(err)
    }
}

async function updateComment(req, res) {
    try {
        const post = await Post.findById(req.params.post_id)
        //update
        const idx = post.comments.findIndex((comment) => parseInt(comment._id) === parseInt(req.params.comment_id))
        post.comments[idx].is_solution = true
        await post.save()
        res.json(post.comments[idx])
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    createComment,
    deleteComment,
    updateComment
}


