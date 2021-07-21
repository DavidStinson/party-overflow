import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Assets
import coder from '../assets/coder.json'

//Components
import Animation from '../components/Lottie/Animation'

//Services
import { login } from '../services/authService'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password,
        }
        try {
            await login(formData)
            props.handleSignupOrLogin()
            props.history.push('/home')
        } catch (error) {
            setLoginError(true)
            setEmail('')
            setPassword('')
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="signup-page">
            <div className='left-container'>
                <div className='form-container'>
                    <div className="title-container">
                        <h1>Login</h1>
                        {loginError ? <h3>Oops! Invalid Credentials</h3> : <h3>Please enter your login information</h3>}
                    </div>
                    <form name="register" onSubmit={handleSubmit}>
                        <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmail}></input>
                        <input name="password" type="password" placeholder="Password" value={password} onChange={handlePassword}></input>
                        <button type="submit">SIGN IN</button>
                    </form>
                    <div className="redirect-container">
                        <p>Already have an account?</p>
                        <Link className="redirect-link" to="/register"><p>Sign Up</p></Link>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <Animation animData={coder}></Animation>
            </div>
        </div>
    )
}

export default Login


