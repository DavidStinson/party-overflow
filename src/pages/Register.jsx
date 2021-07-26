import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Register.css'

//Assets
import coder from '../assets/coder.json'

//Components
import Animation from '../components/Lottie/Animation'
import AvatarSelection from '../components/misc/AvatarSelection'

//Services
import { signup } from '../services/authService'

const Register = (props) => {
    const [popup, setPopup] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    const [formData, setFormData] = useState({
        handle: '',
        email: '',
        password: '',
        passwordConf: '',
        avatar: 'https://i.imgur.com/Wdyo4ow.png'
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePopup = () => {
        setPopup(!popup)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(formData)
            props.handleSignupOrLogin()
            props.history.push('/profile')
        } catch (error) {
            setRegisterError(true)
            setFormData({
                handle: '',
                email: '',
                password: '',
                passwordConf: '',
                avatar: 'https://i.imgur.com/Wdyo4ow.png'
            })
        }
    }


    return (
        <div className="signup-page">
            {popup && <AvatarSelection formData={formData} handleChange={handleChange} handlePopup={handlePopup}></AvatarSelection>}

            <div className='left-container'>
                <div className='form-container'>
                    <div className="title-container">
                        <h1>Create an Account</h1>
                        {registerError ? <h3>Oops! Invalid Credentials</h3> : <h3>Social media for developers.</h3>}
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <input autoComplete="off" required name="handle" type="text" placeholder="Username" onChange={handleChange} value={formData.handle}></input>
                        <input autoComplete="off" required name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email}></input>
                        <input autoComplete="off" required name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password}></input>
                        <button autoComplete="off" id="avatar-button" onClick={handlePopup} type="button">Select Avatar</button>
                        <button autoComplete="off" id="submit-button" type="submit">SIGN UP</button>
                    </form>

                    <div className="redirect-container">
                        <p>Already have an account?</p>
                        <Link className="redirect-link" to="/login"><p>Login</p></Link>
                    </div>

                </div>
            </div>

            <div className="right-container">
                <Animation animData={coder}></Animation>
            </div>

        </div>
    )
}

export default Register

