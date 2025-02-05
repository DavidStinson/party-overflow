import React from "react"
import '../../styles/Card.css'

//Components
import UserCard from '../misc/UserCard/UserCard'
import Codeblock from '../Code/Codeblock'
import CommentInteractions from './CommentInteractions'

const CommentCard = (props) => {

    return (
        props.comment &&
        <div className="comment-card">
            
            <div className="card-header">
                <UserCard user={props.comment.commenter}></UserCard>
                <CommentInteractions
                    post={props.post}
                    comment={props.comment}
                    currentUser={props.currentUser}
                    handleSolution={props.handleSolution}
                    handleDeleteComment={props.handleDeleteComment}
                ></CommentInteractions>
            </div>

            <div className="question-container">
                <p> {props.comment.is_solution && '[SOLUTION]'} {props.comment.comment_text}</p>
            </div>

            {props.comment.codeblock &&
                <div className="code-container">
                    <Codeblock codeblock={props.comment.codeblock}></Codeblock>
                </div>
            }

        </div>
    )
}

export default CommentCard
