import React from 'react'
import '../../styles/PostCard.css'

const CommentInteractions = (props) => {

    return (
        props.currentUser && props.currentUser._id === props.comment.commenter._id ?
            <div>
                <button onClick={() => props.markPostResolved(props.post)}>Resolve</button>
                <button onClick={() => props.handleDeletePost(props.post)}>Delete</button>
            </div>
            :
            null
    )
}

export default CommentInteractions