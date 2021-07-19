import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PostCard.css'

// Assets
import Check from '../../assets/check.png'
import Remove from '../../assets/remove.png'

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'

const PostCard = (props) => {
    const icon = props.post.is_resolved ? Check : Remove

    console.log(props.post.comments.length)

    return (
        <div className="post-card">
            <UserCard user={props.currentUser}></UserCard>
            <p>{props.post.question}</p>
            <Codeblock codeblock={props.post.codeblock}></Codeblock>
            <img className="resolution-icon" src={icon} alt="resolution symbol"></img>

            <p>{props.post.comments.length} Comments</p>
            <Link to={`/post/${props.post._id}`}>View Comments</Link>

            <button onClick={() => props.markPostResolved(props.post)}>Resolve</button>
            <button onClick={() => props.handleDeletePost(props.post)}>Delete</button>

        </div>
    )
}

export default PostCard