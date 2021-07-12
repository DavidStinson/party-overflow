import React from "react"

//Components
import UserCard from '../misc/UserCard'

const CommentCard = (props) => {

    return (
        props.comment ?
            <div>-
                <UserCard user={props.comment.added_by}></UserCard>
                <p>{props.comment.comment_text}</p>
                <p>{props.comment.is_solution ? 'Solution' : null}</p>

                <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete Comment</button>
                <button onClick={() => props.handleSolution(props.comment)}>Mark Solution</button>


            </div>
            :
            null
    )
}

export default CommentCard
