import React, { useEffect } from 'react'

const Profile = (props) => {
    const { _id, name, avatar } = props.currentUser

    return (
        <div>
            <img src={avatar} alt="user avatar"></img>
            <p>{name}</p>
        </div>
    )
}

export default Profile