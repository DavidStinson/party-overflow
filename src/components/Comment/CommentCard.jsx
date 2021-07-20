import React from "react"

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'
import CommentInteractions from './CommentInteractions'

const CommentCard = (props) => {

    console.log('COMMENT CARD POST', props.post.added_by._id)

    return (
        props.comment ?
            <div>
                <UserCard user={props.comment.commenter}></UserCard>
                <p>{props.comment.comment_text}</p>
                <Codeblock codeblock={props.comment.codeblock}></Codeblock>
                <p>{props.comment.is_solution ? 'Solution' : null}</p>
                
                <CommentInteractions
                    comment={props.comment}
                    currentUser={props.currentUser}
                    handleSolution={props.handleSolution}
                    handleDeleteComment={props.handleDeleteComment}
                ></CommentInteractions>

                {props.currentUser._id === props.post.added_by._id ?
                    <button onClick={() => props.handleSolution(props.comment)}>Mark As Solution</button>
                    : null}

            </div>
            :
            null
    )
}

export default CommentCard
