import React from "react"

//Components
import CommentCard from './CommentCard'

const CommentList = (props) => {

    return (
        props.comments.map((comment, index) => (
            <CommentCard
                key={index}
                index={index}
                comment={comment}
                post={props.post}
                currentUser={props.currentUser}
                handleSolution={props.handleSolution}
                handleDeleteComment={props.handleDeleteComment}
            />
        ))
    )
}

export default CommentList