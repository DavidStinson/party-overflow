import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/App.css'

// Components
import Feed from '../components/Layout/Feed'
import CreatePost from '../components/CreateForms/CreatePost/CreatePost'
import Layout from '../components/Layout/Layout'

// Services
import { 
    getPaginatedPosts, 
    updatePost, 
    deletePost, 
    createPost,
} from '../services/postService'

const Home = (props) => {
    const history = useHistory()
    const prevPostState = useRef()
    const [currentPage, setCurrentPage] = useState(0)
    const [headerToggle, setHeaderToggle] = useState(true)
    const [posts, setPosts] = useState([])

    const goBack = () => {
        setPosts(prevPostState.current)
        setHeaderToggle(true)
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

    const handleDeletePost = async (postData) => {
        try {
            await deletePost(postData._id)
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
            const res = await getPaginatedPosts(page)
            setPosts(res)
            prevPostState.current = res
        }
        fetchAllPosts(currentPage)
        return () => { setPosts([]) }
    }, [currentPage])


    return (
        <Layout {...props}>
            <div className="layout">
                {props.display ?
                    <Feed
                        currentUser={props.currentUser}

                        prevPostState={prevPostState}
                        goBack={goBack}

                        changePage={changePage}
                        currentPage={currentPage}

                        headerToggle={headerToggle}
                        setHeaderToggle={setHeaderToggle}
                        setDisplay={props.setDisplay}

                        markPostResolved={markPostResolved}
                        handleDeletePost={handleDeletePost}

                        posts={posts}
                        setPosts={setPosts}
                        
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


