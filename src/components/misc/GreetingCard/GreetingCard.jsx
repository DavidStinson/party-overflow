import React from 'react'
import { Link } from 'react-router-dom'
import './GreetingCard.css'

const GreetingCard = () => {

    return (
        <div className="greeting-card">
            <h3>Have you joined the party?</h3>
            <p>Sign up now to interact with other developers.</p>
            <Link to="/register">
                <button>Sign Up</button>
            </Link>
        </div>
    )
}

export default GreetingCard