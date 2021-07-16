import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.css'

//Services
import { getUser, logout } from './services/authService'

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
// import Main from './components/Layout/Main'


const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [authenticated, setAuthenticated] = useState(false)
  const [display, setDisplay] = useState(true)


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



  return (
    <div className="App">
      <NavBar authenticated={authenticated} handleLogout={handleLogout} ></NavBar>
      <Switch>
        <Route exact path="/" component={(props) => (<Landing {...props} />)} />
        <Route path="/login" component={(props) => (<Login {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />
        <Route path="/register" component={(props) => (<Register {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />

        <ProtectedRoute authenticated={authenticated} path='/profile' component={(props) => (
          <Profile currentUser={currentUser} {...props} />
        )}>
        </ProtectedRoute>

        <Route path="/home" component={(props) => (
          <Layout currentUser={currentUser} display={display} setDisplay={setDisplay}>
            <Home {...props} display={display} setDisplay={setDisplay} currentUser={currentUser}></Home>
          </Layout>
        )} />

        <Route path="/post/:id" component={(props) => (
          <Layout currentUser={currentUser} display={display} setDisplay={setDisplay}>
            <PostDetails {...props} />
          </Layout>
        )} />

      </Switch>
    </div>
  )
}

export default App

