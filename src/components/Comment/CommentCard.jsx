import React from "react"

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'

const CommentCard = (props) => {

    return (
        props.comment ?
            <div>-
                <UserCard user={props.comment.commenter}></UserCard>
                <p>{props.comment.comment_text}</p>
                <Codeblock codeblock={props.comment.codeblock}></Codeblock>
                <p>{props.comment.is_solution ? 'Solution' : null}</p>

                <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete Comment</button>
                <button onClick={() => props.handleSolution(props.comment)}>Mark Solution</button>
            </div>
            :
            null
    )
}

export default CommentCard
