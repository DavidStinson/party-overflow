import React from 'react'
import '../../styles/UserCard.css'

const UserCard = (props) => {
    const { user } = props
    console.log(user)

    return (
        user ?
            <div className="user-card">
                <img src={user.avatar} alt="user avatar"></img>
                <p>{user.handle}</p>
            </div >
            :
            null
    )
}

export default UserCard