import React from 'react'
import '../../styles/Card.css'

const CommentInteractions = (props) => {

    return (
        <div className="interactions">
            {props.currentUser && props.currentUser._id === props.comment.commenter._id &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>
            }
            {props.currentUser && props.currentUser._id === props.post.added_by._id && !props.comment.is_solution &&
                <button onClick={() => props.handleSolution(props.comment)}>Solution</button>
            }
        </div>
    )
}

export default CommentInteractions