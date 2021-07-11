const Post = require('../models/post')

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



module.exports = {
    createComment,
    deleteComment,
    updateComment
}


