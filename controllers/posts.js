import { User } from '../models/user.js'
import { Post } from '../models/post.js'

const getPostById = async (req, res) => {
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
        const posts = await Post.find({added_by: { $eq: req.params.user_id },})
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

const createPost = async (req, res) => {
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

const getRecent = async (req, res) => {
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

const updatePost = async (req, res) => {
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
        const removedPost = await Post.findByIdAndDelete(req.params.post_id)
        const user = await User.findById(req.params.user_id)
        user.posts.remove({ _id: req.params.post_id })
        await user.save()
        res.send(removedPost)
    } catch (error) {
        throw error
    }
}

export {
    createPost,
    getRecent,
    updatePost,
    deletePost,
    getPostsByUserId,
    searchPosts,
    getPostById,
}
