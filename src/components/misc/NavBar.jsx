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

            <Link className="logo" to='/home'>
                <img src="https://i.imgur.com/Vba6pJv.png" alt="disco-ball"></img>
            </Link>

            <button className="hamburger" onClick={handleClick}>
                <img src="https://i.imgur.com/e2wfqY1.png" alt="hamburger icon"></img>
            </button>


            <div className="mobile-nav" ref={navRef}>
                <button className="hamburger" onClick={handleClick}>
                    <img
                        style={{ width: '20px', margin: '5px 10px 0px 10px' }}
                        src="https://i.imgur.com/wpgp3TT.png" alt="hamburger icon"
                    ></img>
                </button>

                <div className="mobile-links">
                    {authenticated ?
                        <>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/home'>Home</Link>
                            <p onClick={handleLogout}>Sign Out</p>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </>
                    }
                </div>

            </div>

        </div>
    )
}

export default NavBar