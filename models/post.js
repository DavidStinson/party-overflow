const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)