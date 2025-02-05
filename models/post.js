import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment_text: {
        type: String,
        required: true,
    },
    codeblock: {
        type: String,
        required: false,
    },
    is_solution: {
        type: Boolean,
        default: false,
    },
    commenter: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
}, { timestamps: true })

const postSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    codeblock: {
        type: String,
        required: false,
    },
    is_resolved: {
        type: Boolean,
        default: false,
    },
    added_by: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
    },
    comments: [commentSchema]
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export {
    Post
}