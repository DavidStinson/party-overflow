const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    handle: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    solution_count: {
        type: Number,
        required: false,
        default: 0,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {
    timestamps: true
})

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password
        return ret
    }
})

userSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) return next()
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema)