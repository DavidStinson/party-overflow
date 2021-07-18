import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.css'

//Services
import { getUser, logout } from './services/authService'
import { getRecent, updatePost, deletePost, createPost, search } from './services/postService'

//Pages + Components
import NavBar from './components/misc/NavBar'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './components/misc/ProtectedRoute'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PostDetails from './pages/PostDetails'


const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [authenticated, setAuthenticated] = useState(false)
  const [display, setDisplay] = useState(true)

  const [posts, setPosts] = useState([]) //set limit on post length
  const [currentPage, setCurrentPage] = useState(0)


  const changePage = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage + parseInt(e.target.value))
  }

  // const handleSearch = async (keyword) => {
  //   //search might need page limit at some point
  //   try {
  //     const response = await search(keyword)
  //     console.log(response)
  //     // setPosts(response.posts)
  //   } catch (error) {
  //     throw error
  //   }
  // }


  const handleCreatePost = async (formData) => {
    try {
      const response = await createPost(formData)
      response.post.added_by = currentUser
      setPosts((posts) => [response.post, ...posts])
      setDisplay(true)
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

  const handleSignupOrLogin = async () => {
    const user = getUser()
    setCurrentUser(user)
    setAuthenticated(true)
  }

  const handleLogout = () => {
    logout()
    setCurrentUser(null)
    setAuthenticated(false)
  }

  const verifyToken = async () => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const user = getUser()
        setCurrentUser(user)
        setAuthenticated(true)
      } catch (error) {
        localStorage.clear()
      }
    }
  }

  useEffect(() => {
    verifyToken()
  }, [authenticated])


  useEffect(() => {
    const fetchAllPosts = async (page) => {
      const posts = await getRecent(page)
      setPosts(posts)
    }
    fetchAllPosts(currentPage)
  }, [currentPage])


  return (
    <div className="App">
      <NavBar authenticated={authenticated} handleLogout={handleLogout} setPosts={setPosts}></NavBar>
      <Switch>
        <Route exact path="/" component={(props) => (<Landing {...props} />)} />
        <Route path="/login" component={(props) => (<Login {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />
        <Route path="/register" component={(props) => (<Register {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />

        <ProtectedRoute authenticated={authenticated} path='/profile' component={(props) => (
          <Profile
            {...props}
            posts={posts}
            verifyToken={verifyToken}
            currentUser={currentUser}
            handleDeletePost={handleDeletePost}
            markPostResolved={markPostResolved}
          />
        )}>
        </ProtectedRoute>

        <Route path="/home" component={(props) => (
          <Layout currentUser={currentUser} display={display} setDisplay={setDisplay}>
            <Home {...props}
              posts={posts}
              display={display}
              currentUser={currentUser}
              currentPage={currentPage}
              changePage={changePage}
              handleCreatePost={handleCreatePost}
              handleDeletePost={handleDeletePost}
              markPostResolved={markPostResolved}
            ></Home>
          </Layout>
        )} />

        <Route path="/post/:id" component={(props) => (
          <Layout currentUser={currentUser} display={display} setDisplay={setDisplay}>
            <PostDetails
              {...props}
              currentUser={currentUser}
              handleDeletePost={handleDeletePost}
              markPostResolved={markPostResolved}
            />
          </Layout>
        )} />

      </Switch>
    </div>
  )
}

export default App

