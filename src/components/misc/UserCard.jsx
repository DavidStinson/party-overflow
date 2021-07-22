import React from 'react'
import '../../styles/UserCard.css'

const UserCard = (props) => {
    const { user } = props

    return (
        user ?
            <div className="user-card">
                <img src={user.avatar} alt="user avatar"></img>
                <div className="user-info">
                    <h4>{user.handle}</h4>
                    <p>Washington DC</p>
                </div>
            </div >
            :
            null
    )
}

export default UserCard