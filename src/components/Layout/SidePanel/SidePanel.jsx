import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './SidePanel.css'

//Components
import Search from '../../misc/Search/Search'

const SidePanel = (props) => {
    const { display, setDisplay, currentUser } = props
    const history = useHistory()

    const handleRedirect = () => {
        setDisplay(!display)
        history.push('/home')
    }

    return (
        <div className="side-panel">
            <div className="menu">

                <div className="menu-header">
                    <h3>Menu</h3>
                </div>

                <div className="menu-items">
                    {currentUser ?
                        <>
                            <Search
                                setPosts={props.setPosts}
                                setDisplay={props.setDisplay}
                                setHeaderToggle={props.setHeaderToggle}
                            ></Search>

                            <Link to="/profile"><button>Profile</button></Link>
                            <button onClick={() => handleRedirect()}>{display ? 'Create Post' : 'Feed'}</button>
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

export default SidePanel