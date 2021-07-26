import React from 'react'
import '../../styles/App.css'

//Components
import Leaderboard from '../Layout/Leaderboard'
import SideMenu from '../Layout/SideMenu'

const Layout = (props) => {
    const { children } = props

    return (
        <div className="home-page">
            <SideMenu {...props}></SideMenu>
            {children}
            <Leaderboard></Leaderboard>
        </div>
    )
}

export default Layout