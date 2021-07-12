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
                handleDeleteComment={props.handleDeleteComment}
                handleSolution={props.handleSolution}
            />
        ))
    )
}

export default CommentList