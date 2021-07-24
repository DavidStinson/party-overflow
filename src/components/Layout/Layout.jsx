import React from 'react'
import '../../styles/App.css'

//Components
import Leaderboard from '../Layout/Leaderboard'
import SideMenu from '../Layout/SideMenu'

const Layout = (props) => {


    const { children, currentUser, display, setDisplay } = props

    return (
        <div className="home-page">
            <SideMenu display={display} setDisplay={setDisplay} currentUser={currentUser}></SideMenu>
            {children}
            <Leaderboard></Leaderboard>
        </div>
    )
}

export default Layout