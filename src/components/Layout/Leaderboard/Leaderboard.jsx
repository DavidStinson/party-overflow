import React, { useState, useEffect } from 'react'
import './Leaderboard.css'

// Components
import UserCard from '../../misc/UserCard/UserCard'
import GreetingCard from '../../misc/GreetingCard/GreetingCard'

//Services
import { getTopUsers } from '../../../services/userService'

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
            <GreetingCard></GreetingCard>
            <div className="user-list-container">

                <div className="user-list-header">
                    <h3>Top Users</h3>
                </div>

                {userList &&
                    userList.map((user, index) => (
                        <div className="leader-card" key={index} style={{ display: 'flex' }}>
                            <UserCard user={user}></UserCard>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Leaderboard