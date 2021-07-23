import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/App.css'

const SideMenu = (props) => {
    const history =  useHistory()
    const { display, setDisplay, currentUser } = props
    const menuText = display ? 'Create Post' : 'Feed'

    const handleRedirect = () => {
        setDisplay(!display)
        history.push('/home')
    }

    return (
        <div className="side-menu">
            {currentUser ?
                <div>
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                    <button onClick={() => handleRedirect()}>{menuText}</button>
                </div>
                :
                null
            }
        </div>
    )
}

export default SideMenu