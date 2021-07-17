import React, { useState, useEffect } from 'react'
import '../styles/App.css'

// Components

//Services
import { getPostById, updatePost, deletePost } from '../services/postService'

const PostDetails = (props) => {
    const { id } = props.match.params
    const [details, setDetails] = useState()


    useEffect(() => {
        const fetchUserPosts = async (postId) => {
            const response = await getPostById(postId)
            console.log(response)
            setDetails(response.posts)
        }

        fetchUserPosts(id)
    }, [id])


    return (
        <div>
            <h1>post details</h1>
        </div>
    )
}

export default PostDetails