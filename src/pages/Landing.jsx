import React from 'react'
import '../styles/Landing.css'

const Landing = () => {

    return (
        <div className="landing-page">

            <div className="landing-elements">
                    <img className="logo-splash" src="https://i.imgur.com/Vba6pJv.png" alt="disco ball logo"></img>
                    <img className="mobile-logo" src="https://i.imgur.com/goMZ2JW.png" alt="disco ball logo"></img>
                <p>Lorem Ipsum</p>
                <div className="landing-button-container">
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>
            </div>

        </div>
    )
}

export default Landing