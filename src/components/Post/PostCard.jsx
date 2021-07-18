import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PostCard.css'

// Assets
import Check from '../../assets/check.png'
import Remove from '../../assets/remove.png'

//Components
import UserCard from '../misc/UserCard'
import CommentSection from '../Comment/CommentSection'
import Codeblock from '../Code/Codeblock'

const PostCard = (props) => {
    const [showComments, setShowComments] = useState(false)
    const icon = props.post.is_resolved ? Check : Remove

    return (
        <div className="post-card">
            <UserCard user={props.currentUser}></UserCard>
            <p>{props.post.question}</p>
            <Codeblock codeblock={props.post.codeblock}></Codeblock>
            <img className="resolution-icon" src={icon} alt="resolution symbol"></img>

            <Link to={`/post/${props.post._id}`}>Details</Link>
            
            <button onClick={() => props.markPostResolved(props.post)}>Resolve</button>
            <button onClick={() => props.handleDeletePost(props.post)}>Delete</button>

            <button onClick={() => setShowComments(!showComments)}>Comments</button>
            {showComments ? <CommentSection post={props.post} currentUser={props.currentUser}></CommentSection> : null}
        </div>
    )
}

export default PostCard