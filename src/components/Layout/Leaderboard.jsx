import React, { useState, useEffect } from 'react'
import '../../styles/App.css'

// Components
import UserCard from '../misc/UserCard'

//Services
import { getTopUsers } from '../../services/authService'

const Leaderboard = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getTopUsers()
                setUserList(users)
            } catch (error) {
                throw error
            }
        }
        fetchUsers()
        return () => { setUserList([]) }
    }, [])


    return (
        <div className="leaderboard">
            <p>Leaderboard</p>
            {userList &&
                userList.map((user, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <UserCard user={user}></UserCard>
                    </div>
                ))
            }
        </div>
    )
}

export default Leaderboard