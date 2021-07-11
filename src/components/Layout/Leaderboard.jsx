import React, { useState, useEffect } from 'react'
import '../../styles/App.css'

//Components
// import UserCard from './UserCard'

//Services
import { getTopUsers } from '../../services/authService'

const Leaderboard = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        let componentMounted = true
        getTopUsers().then((response) => {
            if (componentMounted) {
                setUserList(response)
            }
        })
        return () => { componentMounted = false }
    }, [])

    return (
        <div className="leaderboard">
            <p>Leaderboard</p>
            {/* {userList ?
                userList.map((user, index) => (
                    <div key={index} style={{display: 'flex'}}>
                        <UserCard user={user}></UserCard>
                        <p>Solution Count: {user.solution_count}</p>
                    </div>
                ))
                :
                null
            } */}
        </div>
    )
}

export default Leaderboard