import React, { useState } from "react"

// Components
import CommentList from './CommentList'
import CommentForm from './CommentForm'

// Services
import { createComment, deleteComment, updateComment } from '../../services/commentService'


const CommentSection = (props) => {
    const [commentArray, setCommentArray] = useState([...props.post.comments])
    const [showNewComment, setShowNewComment] = useState(false)

    const handleCreateComment = async (formData) => {
        try {
            const response = await createComment(props.post._id, formData)
            response.commenter = props.currentUser
            setCommentArray(commentArray => [...commentArray, response])
            setShowNewComment(false)
        } catch (error) {
            throw error
        }
    }

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(props.post._id, commentId)
            setCommentArray(commentArray.filter(comment => comment._id !== commentId))
        } catch (error) {
            throw error
        }
    }

    const handleSolution = async (comment) => {
        try {
            const commentId = comment._id
            const userId = comment.commenter._id
            const user = comment.commenter
            const updatedPost = await updateComment(commentId, props.post._id, userId)
            const updatedCommentArray = updatedPost.comments.map((comment) => {
                if (comment._id === commentId) {
                    comment.is_solution = true
                    comment.commenter = user
                    return comment
                }
                return comment
            })
            props.setPost(updatedPost)
            setCommentArray(updatedCommentArray)
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="comment-section">

            <CommentList
                post={props.post}
                comments={commentArray}
                currentUser={props.currentUser}
                handleSolution={handleSolution}
                handleDeleteComment={handleDeleteComment}
            ></CommentList>

            {props.currentUser !== null ? <button onClick={() => setShowNewComment(!showNewComment)}>New Comment</button> : null}

            {showNewComment ?
                <CommentForm
                    post={props.post}
                    handleCreateComment={handleCreateComment}
                    currentUser={props.currentUser}
                ></CommentForm>
                :
                null
            }

        </div>
    )
}

export default CommentSection
