import React from 'react'
import '../../styles/PostCard.css'

const CommentInteractions = (props) => {
    console.log(props.comment._id)

    return (
        props.currentUser && props.currentUser._id === props.comment.commenter._id ?
            <div>
                <button onClick={() => props.handleSolution(props.comment)}>Resolve</button>
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>
            </div>
            :
            null
    )
}

export default CommentInteractions