const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
    comment_text: {
        type: String,
        required: true
    },
    codeblock: {
        type: String,
        required: false
    },
    is_solution: {
        type: Boolean,
        default: false,
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })



const postSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    codeblock: {
        type: String,
        required: true
    },
    is_resolved: {
        type: Boolean,
        default: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [commentSchema]
}, { timestamps: true })



module.exports = mongoose.model('Post', postSchema)