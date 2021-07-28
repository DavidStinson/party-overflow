import { User } from '../models/user.js'
import { Post } from '../models/post.js'

const show = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        .populate('added_by')
        .populate('comments.commenter')
        return res.status(200).json({ post })
    } catch (error) {
        return res.status(500).send(error.message, 'Could not locate post')
    }
}

const getPostsByUserId = async (req, res) => {
    try {
        const posts = await Post.find({added_by: { $eq: req.params.id },})
        .populate('added_by')
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message, 'No Posts Were Found')
    }
}

const searchPosts = async (req, res) => {
    try {
        const posts = await Post.find({
            question: { 
                $regex: req.query.keyword,
                $options: 'i'
            }
        })
        .populate('added_by')
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message, 'No Results Found')
    }
}

const create = async (req, res) => {
    try {
        const post = await new Post(req.body)
        await post.save()
        await User.updateOne(
            { _id: req.user._id },
            { $push: { posts: post } }
        )
        return res.status(201).json({ post })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const paginatedIndex = async (req, res) => {
    const limitNum = 8
    const skipCount = parseInt(req.params.page) * parseInt(limitNum)
    try {
        const posts = await Post.find({})
        .populate('added_by')
        .limit(limitNum)
        .skip(skipCount)
        .sort({ createdAt: 'desc' })
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const update = async (req, res) => {
    try {
        const updateData = { is_resolved: true }
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        )
        res.send(post)
    } catch (error) {
        throw error
    }
}

const deletePost = async (req, res) => {
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.id)
        const user = await User.findById(req.user._id)
        user.posts.remove({ _id: req.params.id })
        await user.save()
        res.send(removedPost)
    } catch (error) {
        throw error
    }
}

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

const deleteComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id)
        const idx = post.comments.findIndex((comment) =>
            comment._id.equals(req.params.comment_id)
        )
        const removedComment = post.comments.splice(idx, 1)
        await post.save()
        res.json(removedComment)
    } catch (err) {
        res.json(err)
    }
}

const markCommentAsSolution = async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id)
        const idx = post.comments.findIndex((comment) =>
            comment._id.equals(req.params.comment_id)
        )
        post.is_resolved = true
        post.comments[idx].is_solution = true
        await User.updateOne(
            { _id: req.user._id },
            { $inc: { solution_count: 1 } }
        )
        await post.save()
        res.json(post)
    } catch (err) {
        res.json(err)
    }
}

export {
    create,
    paginatedIndex,
    update,
    deletePost as delete,
    getPostsByUserId,
    searchPosts,
    show,
    createComment,
    deleteComment,
    markCommentAsSolution,
}
