import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { usePrevious } from '../hooks/usePrevious'
import '../styles/App.css'

// Components
import Feed from '../components/Layout/Feed'
import CreatePost from '../components/CreateForms/CreatePost/CreatePost'
import Layout from '../components/Layout/Layout'

// Services
import { getRecent, updatePost, deletePost, createPost } from '../services/postService'

const Home = (props) => {
    const history = useHistory()
    const [currentPage, setCurrentPage] = useState(0)
    const [posts, setPosts] = useState([])
    const prevPostState = usePrevious(posts)

    const goBack = () => {
        props.setHeaderToggle(true)
        setPosts(prevPostState)
    }

    const changePage = (e) => {
        e.preventDefault()
        setCurrentPage(currentPage + parseInt(e.target.value))
    }

    const handleCreatePost = async (formData) => {
        try {
            const response = await createPost(formData)
            response.post.added_by = props.currentUser

            if (posts.length < 8) {
                setPosts((posts) => [response.post, ...posts])
            } else {
                const duplicate = [...posts]
                duplicate.splice(duplicate.length - 1, 1)
                setPosts(() => [response.post, ...duplicate])
            }

            props.setDisplay(true)
        } catch (error) {
            throw error
        }
    }

    const handleDeletePost = async (userId, postData) => {
        try {
            await deletePost(userId, postData._id)
            setPosts(posts.filter((post) => post._id !== postData._id))
            history.push('/home')
        } catch (error) {
            throw error
        }
    }

    const markPostResolved = async (postData) => {
        try {
            const updatedPost = await updatePost(postData)
            updatedPost.added_by = props.currentUser
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
        const fetchAllPosts = async (page) => {
            const res = await getRecent(page)
            setPosts(res)
        }
        fetchAllPosts(currentPage)
        return () => { setPosts([]) }
    }, [currentPage])




    return (
        <Layout {...props}>
            <div className="layout">
                {props.display ?
                    <Feed
                        posts={posts}
                        currentUser={props.currentUser}

                        goBack={goBack}
                        changePage={changePage}
                        currentPage={currentPage}
                        headerToggle={props.headerToggle}

                        markPostResolved={markPostResolved}
                        handleDeletePost={handleDeletePost}

                        setPosts={setPosts}
                        setDisplay={props.setDisplay}
                        setHeaderToggle={props.setHeaderToggle}
                    />
                    :
                    <CreatePost
                        setDisplay={props.setDisplay}
                        currentUser={props.currentUser}
                        handleCreatePost={handleCreatePost}
                    />
                }
            </div>
        </Layout>
    )
}

export default Home


