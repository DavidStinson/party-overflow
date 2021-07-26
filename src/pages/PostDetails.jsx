import React, { useState, useEffect } from 'react'
import '../styles/PostCard.css'

// Components
import CommentSection from '../components/Comment/CommentSection'
import PostCard from '../components/Post/PostCard'

//Services
import { getPostById } from '../services/postService'

const PostDetails = (props) => {
    const { id } = props.match.params
    const [post, setPost] = useState()


    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await getPostById(id)
                setPost(response.post)
            } catch (error) {
                throw error
            }
        }
        fetchUserPosts()
        return () => { setPost({}) }
    }, [id])


    return (
        <div className="layout">

            <div className="hidden-container">
                <div className="pagination">
                    <h3>Post Details</h3>
                    <div className="pagination-buttons">
                        <button onClick={(e) => props.history.push('/home')}>Back</button>
                    </div>
                </div>
            </div>

            <div className="post-details">
                {post ?
                    <>
                        <PostCard
                            post={post}
                            markPostResolved={props.markPostResolved}
                            handleDeletePost={props.handleDeletePost}
                            currentUser={props.currentUser}
                        />
                        <CommentSection
                            post={post}
                            setPost={setPost}
                            currentUser={props.currentUser}
                        ></CommentSection>
                    </>
                    :
                    <div>Oops</div>
                }
            </div>
        </div>
    )
}

export default PostDetails