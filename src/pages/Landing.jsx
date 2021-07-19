import React from 'react'
import '../styles/Landing.css'

const Landing = (props) => {


    return (
        <div className="landing-page">
            <div className="landing-elements">
                <div className="logo-container">
                    <img src="https://i.imgur.com/4tgXjNw.png" alt="disco-ball"></img>
                    <h1>partyoverflow</h1>
                </div>
                <p>Lorem Ipsum</p>
                <div>
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Landing