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
            <SideMenu></SideMenu>
            <Main></Main>
            <Leaderboard></Leaderboard>
        </div>
    )
}

export default Home