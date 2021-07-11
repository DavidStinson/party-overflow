function createComment(req, res) {
    Post.findById(req.params.id)
        .then((post) => {
            post.comments.push(req.body)
            post.save()
                .then((post) => { res.json(post) })
        })
        .catch(err => { res.json(err) })
}

function deleteComment(req, res) {
    Post.findById(req.params.post_id)
        .then((post) => {
            const idx = post.comments.findIndex((comment) => comment._id === req.params.comment_id)
            const removedComment = post.comments.splice(idx, 1)
            post.save()
                .then(() => {
                    res.json(removedComment)
                })
        })
}

function updateComment(req, res) {
    Post.findById(req.params.post_id)
        .then((post) => {
            const idx = post.comments.findIndex((comment) => comment._id === req.params.comment_id)
            const updatedComment = post.comments[idx]
            updatedComment.is_solution = true
            post.save()
                .then(() => {
                    res.json(updatedComment)
                })
        }).catch(err => { res.json(err) })
}
