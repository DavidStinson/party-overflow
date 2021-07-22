const Post = require('../models/post')
const User = require('../models/user')

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate([
            {
                path: 'added_by',
                model: 'User',
                select: '_id handle avatar'
            },
            {
                path: 'comments',
                populate: {
                    path: 'commenter',
                    model: 'User',
                    select: '_id handle avatar'
                }
            }
        ])
        return res.status(200).json({ post })
    } catch (error) {
        return res.status(500).send(error.message, 'Could not locate post')
    }
}

const getPostsByUserId = async (req, res) => {
    try {
        const posts = await Post.find({ added_by: { $eq: req.params.user_id } }).populate(
            {
                path: 'added_by',
                model: 'User',
                select: '_id handle avatar'
            })
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message, 'No Posts Were Found')
    }
}

//options i matches upper and lower cases
const searchPosts = async (req, res) => {
    try {
        const posts = await Post.find({ question: { $regex: req.query.keyword, $options: "i" } })
                    .populate([
                {
                    path: 'added_by',
                    model: 'User',
                    select: '_id handle avatar'
                }])
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message, 'No Results Found')
    }
}



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

const getRecent = async (req, res) => {
    const limitNum = 8
    const skipCount = parseInt(req.params.page) * parseInt(limitNum)
    try {
        const posts = await Post.find({})
            .populate([
                {
                    path: 'added_by',
                    model: 'User',
                    select: '_id handle avatar'
                },
                {
                    path: 'comments',
                }
            ])
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
        const post = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true })
        res.send(post)
    } catch (error) {
        throw error
    }
}

const deletePost = async(req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.send(post)
    }catch(error){
        throw error
    }
}

module.exports = {
    createPost,
    getRecent,
    updatePost,
    deletePost,
    getPostsByUserId,
    searchPosts,
    getPostById
}


