import React, { useState, useEffect } from 'react'
import './PostDetails.css'

// Components
import PostDetailsHeader from './PostDetailsHeader'
import PostCard from '../../components/Post/PostCard'
import CommentSection from '../../components/Comment/CommentSection'
import Layout from '../../components/Layout/Layout'

//Services
import { getPostById } from '../../services/postService'

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
        <Layout {...props}>
            <div className="layout">
                <PostDetailsHeader {...props}></PostDetailsHeader>
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
                        <div>Oops!</div>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default PostDetails