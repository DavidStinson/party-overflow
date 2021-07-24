import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'

//Components
import SearchBar from './SearchBar'

const NavBar = (props) => {
    const { authenticated, handleLogout } = props

    const navRef = useRef()

    const handleClick = () => {
        const nav = navRef.current
        nav.classList.toggle('open')
    }


    return (
        <div className="nav-bar">

            <Link className="logo" to='/'>
                <img src="https://i.imgur.com/Vba6pJv.png" alt="disco-ball"></img>
            </Link>

            <Link to='/home'>Home</Link>
            {authenticated ?
                <p onClick={handleLogout}>Sign Out</p>
                :
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            }
            <SearchBar
                setPosts={props.setPosts}
                setDisplay={props.setDisplay}
                setHeaderToggle={props.setHeaderToggle}
            ></SearchBar>

            <button className="hamburger" onClick={handleClick}>
                <img src="https://i.imgur.com/e2wfqY1.png" alt="hamburger icon"></img>
            </button>

            <div className="mobile-nav" ref={navRef}>



            </div>

        </div>
    )
}

export default NavBar