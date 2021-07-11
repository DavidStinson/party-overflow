import React, { useState } from 'react'

//Services
import { signup } from '../services/authService'

const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('https://i.imgur.com/Wdyo4ow.png')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            email: email,
            password: password,
            passwordConf: password,
            avatar: avatar,
        }
        try {
            await signup(formData)
            props.handleSignupOrLogin()
            props.history.push('/home')
        } catch (error) {
            alert('Invalid Credentials')
            throw error
        }
    }


    const handleName = (e) => {
        setName(e.target.value)
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

    return (
        <form name="register" onSubmit={handleSubmit}>
            <input placeholder="name" onChange={handleName} value={name}></input>
            <input placeholder="email" onChange={handleEmail} value={email}></input>
            <input placeholder="password" onChange={handlePassword} value={password}></input>


            <select form="register" onChange={handleAvatar} value={avatar}>
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

            <button type="submit">Submit</button>
        </form>
    )
}

export default Register
