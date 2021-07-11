import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.css'

//Services
import { getUser, logout } from './services/authService'

//Pages + Components
import NavBar from './components/misc/NavBar'
// import ProtectedRoute from '../components/ProtectedRoute'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [authenticated, setAuthenticated] = useState(false)

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
        <Route path="/home" component={(props) => (<Home {...props} currentUser={currentUser} />)} />
      </Switch>
    </div>
  )
}

export default App
