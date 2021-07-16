import React, { useState, useEffect } from 'react'
import '../styles/App.css'

//Components
import PostList from '../components/Post/PostList'
import PostForm from '../components/Post/PostForm'
import Pagination from '../components/misc/Pagination'

//Services
import { getRecent, updatePost, deletePost, createPost } from '../services/postService'

const Home = (props) => {
    const [posts, setPosts] = useState([]) //set limit on post length
    const [currentPage, setCurrentPage] = useState(0)

    console.log(props.currentUser)

    const changePage = (e) => {
        e.preventDefault()
        setCurrentPage(currentPage + parseInt(e.target.value))
    }

    const handleCreatePost = async (formData) => {
        try {
            const response = await createPost(formData)
            response.post.added_by = props.currentUser
            setPosts(posts => [response.post, ...posts])
            props.setDisplay(true)
        } catch (error) {
            throw error
        }
    }

    const handleDeletePost = async (postData) => {
        try {
            await deletePost(postData._id)
            setPosts(posts.filter((post) => post._id !== postData._id))
        } catch (error) {
            throw error
        }
    }

    const markPostResolved = async (postData) => {
        try {
            const updatedPost = await updatePost(postData)
            const updatedPostArray = posts.map((post) => {
                if (post._id === postData._id) {
                    return updatedPost
                }
                return post
            })
            setPosts(updatedPostArray)
        } catch (error) {
            throw error
        }
    }


    useEffect(() => {
        let componentMounted = true
        getRecent(currentPage).then((posts) => {
            if (componentMounted) {
                setPosts(posts)
            }
        })
        return () => { componentMounted = false }
    }, [currentPage])


    return (
        <div className="layout">
            {props.display ?
                <div>
                    <Pagination
                        changePage={changePage}
                        currentPage={currentPage}
                        posts={posts}
                    ></Pagination>
                    <PostList
                        posts={posts}
                        markPostResolved={markPostResolved}
                        handleDeletePost={handleDeletePost}
                        currentUser={props.currentUser}
                    ></PostList>
                </div>
                :
                <div>
                    <PostForm handleCreatePost={handleCreatePost} currentUser={props.currentUser}></PostForm>
                </div>
            }
        </div>
    )
}

export default Home