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
            const response = await getTopUsers()
            setUserList(response.users)
        }
        fetchUsers()
    }, [])

    return (
        <div className="leaderboard">
            <p>Leaderboard</p>
            {userList.length ?
                userList.map((user, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <UserCard user={user}></UserCard>
                        <p>Solution Count: {user.solution_count}</p>
                    </div>
                ))
                :
                null
            }
        </div>
    )
}

export default Leaderboard