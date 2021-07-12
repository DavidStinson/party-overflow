import React, { useState } from 'react'
import '../styles/App.css'

// Components
import Leaderboard from '../components/Layout/Leaderboard'
import Main from '../components/Layout/Main'
import SideMenu from '../components/Layout/SideMenu'

const Home = (props) => {
    const [display, setDisplay] = useState(true)

    return (
        <div className="home-page">
            <SideMenu display={display} setDisplay={setDisplay} currentUser={props.currentUser}></SideMenu>
            <Main display={display} setDisplay={setDisplay} currentUser={props.currentUser}></Main>
            <Leaderboard></Leaderboard>
        </div>
    )
}

export default Home