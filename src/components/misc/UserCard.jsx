import React from 'react'
import '../../styles/UserCard.css'

const UserCard = (props) => {
    const { user } = props

    return (
        user ?
            <div className="user-card">
                <img src={user.avatar} alt="user avatar"></img>
                <p>{user.name}</p>
            </div >
            :
            null
    )
}

export default UserCard