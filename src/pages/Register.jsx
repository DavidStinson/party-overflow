import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Register.css'

//Assets
import coder from '../assets/coder.json'

//Components
import Animation from '../components/Lottie/Animation'
import AvatarList from '../components/misc/AvatarList'

//Services
import { signup } from '../services/authService'

const Register = (props) => {
    const [popup, setPopup] = useState(false)
    const [formData, setFormData] = useState({})

    //refactor into single form 
    const [handle, setHandle] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('https://i.imgur.com/Wdyo4ow.png')



    const handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await signup(formData)
            props.handleSignupOrLogin()
            props.history.push('/home')
        } catch (error) {
            alert('Invalid Credentials')
            throw error
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPopup(!popup)
        setFormData({
            handle: handle,
            email: email,
            password: password,
            passwordConf: password,
            avatar: avatar
        })
    }

    const handleHandle = (e) => {
        setHandle(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAvatar = (e) => {
        setAvatar(e.target.value)
    }

    console.log(avatar)

    return (

        <div className="signup-page">

            <div className='left-container'>
                <div className='form-container'>
                    <div className="title-container">
                        <h1>Create an Account</h1>
                        <h3>Social media for developers.</h3>
                    </div>
                    <form name="register" onSubmit={handleSubmit}>
                        <input placeholder="Username" onChange={handleHandle} value={handle}></input>
                        <input placeholder="Email" onChange={handleEmail} value={email}></input>
                        <input placeholder="Password" onChange={handlePassword} value={password}></input>

                        <select onChange={handleAvatar} value={avatar}>
                            <option value='https://i.imgur.com/Wdyo4ow.png'>Cat</option>
                            <option value='https://i.imgur.com/74imy42.png'>Bear</option>
                            <option value='https://i.imgur.com/51nVPDR.png'>Monkey</option>
                            <option value='https://i.imgur.com/JjgmvrX.png'>Koala</option>
                            <option value='https://i.imgur.com/qWHIXp5.png'>Fox</option>
                            <option value='https://i.imgur.com/BC8wCCP.png'>Dear</option>
                            <option value='https://i.imgur.com/ydToVuJ.png'>Raccoon</option>
                            <option value='https://i.imgur.com/ut1szAk.png'>Panda</option>
                            <option value='https://i.imgur.com/MULaROr.png'>Wolf</option>
                        </select>

                        <button type="submit">SIGN UP</button>
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

