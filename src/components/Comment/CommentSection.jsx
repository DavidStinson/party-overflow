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
            response.added_by = props.currentUser
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
            const commenter = comment.added_by
            const updatedComment = await updateComment(props.post._id, commentId)
            const updatedCommentArray = commentArray.map((comment) => {
                if (comment._id === commentId) {
                    updatedComment.added_by = commenter
                    return updatedComment
                }
                return comment
            })
            setCommentArray(updatedCommentArray)
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="comment-section">
            
            <CommentList
                comments={commentArray}
                post={props.post}
                handleDeleteComment={handleDeleteComment}
                handleSolution={handleSolution}
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
