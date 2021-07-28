import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.css'

//Services
import { getUser, logout } from './services/authService'

//Pages + Components
import Home from './pages/Home'
import Landing from './pages/Landing/Landing'
import NavBar from './components/misc/NavBar/NavBar'
import Profile from './pages/Profile/Profile'
import PostDetails from './pages/PostDetails/PostDetails'
import ProtectedRoute from './components/misc/ProtectedRoute'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import PageNotFound from './pages/PageNotFound'


const App = () => {
  const [display, setDisplay] = useState(true)
  const [currentUser, setCurrentUser] = useState()
  const [authenticated, setAuthenticated] = useState(false)


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



  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} authenticated={authenticated}></NavBar>

      <Switch>
        <Route exact path="/" component={(props) => (<Landing {...props} />)} />
        <Route path="/login" component={(props) => (<Login {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />
        <Route path="/register" component={(props) => (<Register {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />

        <ProtectedRoute
          authenticated={authenticated}
          path='/profile'
          component={() => (
            <Profile
              currentUser={currentUser}
              handleLogout={handleLogout}
              setDisplay={setDisplay}
            />
          )}>
        </ProtectedRoute>

        <Route path="/home" component={(props) => (
          <Home
            {...props}
            display={display}
            setDisplay={setDisplay}
            currentUser={currentUser}
            handleLogout={handleLogout}
          ></Home>
        )} />

        <Route path="/post/:id" component={(props) => (
          <PostDetails
            {...props}
            currentUser={currentUser}
            display={display}
            setDisplay={setDisplay}
            handleLogout={handleLogout}
          />
        )} />

        <Route path="*" component={() => (<PageNotFound />)} />

      </Switch>
    </div>
  )
}

export default App

