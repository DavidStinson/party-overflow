import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

// Components
import Animation from '../components/Lottie/Animation'

import notFound from '../assets/404.json'

const PageNotFound = () => {


    return (
        <div className="not-found">
            <Animation animData={notFound} ></Animation>
            <Link to="/home"><button className="return-button">Home</button></Link>
        </div>
    )
}

export default PageNotFound