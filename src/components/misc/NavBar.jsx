import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'

//Components
import SearchBar from './SearchBar'

//Assets
import Logo from '../../assets/logo-rough.png'

const NavBar = (props) => {
    const { authenticated, handleLogout } = props


    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>party overflow</Link>
            <Link to='/home'>Home</Link>
            {authenticated ?
                <p onClick={handleLogout}>Sign Out</p>
                :
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            }
            <SearchBar setPosts={props.setPosts}></SearchBar>
        </div>
    )
}

export default NavBar