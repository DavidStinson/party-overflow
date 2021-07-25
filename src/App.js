import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import './styles/App.css'

//Services
import { getUser, logout } from './services/authService'
import { getRecent, updatePost, deletePost, createPost } from './services/postService'

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
  const history = useHistory()
  const [display, setDisplay] = useState(true)
  const [headerToggle, setHeaderToggle] = useState(true)
  const [currentUser, setCurrentUser] = useState()
  const [authenticated, setAuthenticated] = useState(false)

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  const changePage = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage + parseInt(e.target.value))
  }


  const handleCreatePost = async (formData) => {
    try {
      const response = await createPost(formData)
      response.post.added_by = currentUser

      if (posts.length < 8) {
        setPosts((posts) => [response.post, ...posts])
      } else {
        const duplicate = [...posts]
        duplicate.splice(duplicate.length - 1, 1)
        setPosts(() => [response.post, ...duplicate])
      }

      setDisplay(true)
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
      updatedPost.added_by = currentUser
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
    setDisplay(true)
  }

  useEffect(() => {
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
    verifyToken()
  }, [authenticated])


  useEffect(() => {
    const fetchAllPosts = async (page) => {
      const res = await getRecent(page)
      setPosts(res)
    }
    fetchAllPosts(currentPage)
  }, [currentPage])


  return (
    <div className="App">
      <NavBar
        setPosts={setPosts}
        setDisplay={setDisplay}
        currentPage={currentPage}
        handleLogout={handleLogout}
        authenticated={authenticated}
        setHeaderToggle={setHeaderToggle}
      ></NavBar>


      <Switch>
        <Route exact path="/" component={(props) => (<Landing {...props} />)} />
        <Route path="/login" component={(props) => (<Login {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />
        <Route path="/register" component={(props) => (<Register {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />

        <ProtectedRoute
          authenticated={authenticated}
          path='/profile'
          component={(props) => (
            <Profile
              posts={posts}
              currentUser={currentUser}
              handleDeletePost={handleDeletePost}
              markPostResolved={markPostResolved}
            />
          )}>
        </ProtectedRoute>

        <Route path="/home" component={(props) => (
          <Layout
            currentUser={currentUser}
            display={display}
            setDisplay={setDisplay}
            handleLogout={handleLogout}>
            <Home
              {...props}
              posts={posts}
              display={display}
              changePage={changePage}
              currentUser={currentUser}
              currentPage={currentPage}
              headerToggle={headerToggle}
              handleCreatePost={handleCreatePost}
              handleDeletePost={handleDeletePost}
              markPostResolved={markPostResolved}
            ></Home>
          </Layout>
        )} />

        <Route path="/post/:id" component={(props) => (
          <Layout
            currentUser={currentUser}
            display={display}
            setDisplay={setDisplay}
            handleLogout={handleLogout}>
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

