import React, { useState, useEffect } from 'react'
import '../styles/App.css'

// Components
import CommentSection from '../components/Comment/CommentSection'

//Services
import { getPostById, updatePost, deletePost } from '../services/postService'

const PostDetails = (props) => {
    const { id } = props.match.params
    const [post, setPost] = useState()


    //delete post, just need to remove and push to home page
    //

    console.log(post)

    useEffect(() => {
        let componentMounted = true
        const fetchUserPosts = async () => {
            try {
                const response = await getPostById(id)
                if (componentMounted) {
                    setPost(response.post)
                }
            } catch (error) {
                throw error
            }
        }
        fetchUserPosts()
        return () => { componentMounted = false }
    }, [id])



    // useEffect(() => {
    //     let componentMounted = true
    //     getPostById(id).then((response) => {
    //         if (componentMounted) {
    //             setPost(response.post)
    //         }
    //     })
    //     return () => { componentMounted = false }
    // }, [])


    //move comments to details page

    return (
        post ?
            <div className="layout">
                <h1>post details</h1>
                <CommentSection post={post} currentUser={props.currentUser}></CommentSection>
            </div>
            :
            null
    )
}

export default PostDetails