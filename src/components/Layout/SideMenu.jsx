import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/App.css'

//Components
import SearchBar from '../misc/SearchBar'

const SideMenu = (props) => {
    const history = useHistory()
    const { display, setDisplay, currentUser } = props
    const menuText = display ? 'Create Post' : 'Feed'

    const handleRedirect = () => {
        setDisplay(!display)
        history.push('/home')
    }

    return (
        <div className="side-menu">
            <div className="menu-panel">

                <div className="menu-header">
                    <h3>Menu</h3>
                </div>

                <div className="menu-items">
                    {currentUser ?
                        <>
                            <SearchBar
                                setPosts={props.setPosts}
                                setDisplay={props.setDisplay}
                                setHeaderToggle={props.setHeaderToggle}
                            ></SearchBar>
                            <Link to="/profile"><button>Profile</button></Link>
                            <button onClick={() => handleRedirect()}>{menuText}</button>
                            <button onClick={props.handleLogout}>Sign Out</button>
                        </>
                        :
                        null
                    }

                </div>

            </div>
        </div>
    )
}

export default SideMenu