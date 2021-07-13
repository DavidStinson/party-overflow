import React from 'react'
import { Link } from 'react-router-dom'

//Assets
import Logo from '../../assets/logo-rough.png'

const NavBar = (props) => {
    const { authenticated, handleLogout } = props


    return (
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid lightGrey', padding: '16px', width: '100%' }}>

            <Link to='/'><img style={{ width: '13em' }} src={Logo} alt="party-hat"></img></Link>
            <Link to='/home'>Home</Link>

            {authenticated ?
                <p onClick={handleLogout}>Sign Out</p>
                :
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            }
        </div>
    )
}

export default NavBar