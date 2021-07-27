import { User } from '../models/user.js'
import { Post } from '../models/post.js'

const createComment = async (req, res) => {
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

const deleteComment = async(req, res) => {
    try {
        const post = await Post.findById(req.params.post_id)
        const idx = post.comments.findIndex((comment) => comment._id.equals(req.params.comment_id))
        const removedComment = post.comments.splice(idx, 1)
        await post.save()
        res.json(removedComment)
    } catch (err) {
        res.json(err)
    }
}

const updateComment = async(req, res) => {
    try {
        const post = await Post.findById(req.params.post_id)
        const idx = post.comments.findIndex((comment) => comment._id.equals(req.params.comment_id))
        post.is_resolved = true
        post.comments[idx].is_solution = true
        await User.updateOne(
            { _id: req.params.user_id },
            { $inc: { solution_count: 1 } }
        )
        await post.save()
        res.json(post)
    } catch (err) {
        res.json(err)
    }
}

export {
    createComment,
    deleteComment,
    updateComment
}
