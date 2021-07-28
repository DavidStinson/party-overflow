import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {

    return (
        <div className="landing-page">

            <div className="landing-elements">
                <img className="logo-splash" src="https://i.imgur.com/Vba6pJv.png" alt="disco ball logo"></img>
                <img className="mobile-logo" src="https://i.imgur.com/goMZ2JW.png" alt="disco ball logo"></img>
                <div className="landing-button-container">
                    <button><Link to="/register">Sign Up</Link></button>
                    <button><Link to="/login">Sign In</Link></button>
                </div>
            </div>

        </div>
    )
}

export default Landing