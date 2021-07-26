import React from 'react'
import '../../styles/App.css'

//Components
import Leaderboard from '../Layout/Leaderboard/Leaderboard'
import SidePanel from '../Layout/SidePanel/SidePanel'

const Layout = (props) => {
    const { children } = props 
    // children refers to Home and PostDetails components

    return (
        <div className="home-page">
            <SidePanel {...props}></SidePanel>
            {children}
            <Leaderboard></Leaderboard>
        </div>
    )
}

export default Layout