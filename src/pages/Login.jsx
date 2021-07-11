import React, { useState } from 'react'

//Services
import { login } from '../services/authService'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [loginErr, setLoginErr] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            pw: password,
        }
        try {
            await login(formData)
            props.handleSignupOrLogin()
            props.history.push('/home')
        } catch (error) {
            alert('Invalid Credentials')
            throw error
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="email" value={email} onChange={handleEmail}></input>
                <input name="password" type="password" placeholder="passord" value={password} onChange={handlePassword}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login