import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PostCard.css'

// Assets
import Check from '../../assets/check.png'
import Remove from '../../assets/remove.png'

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'
import PostInteractions from './PostInteractions'

const PostCard = (props) => {
    const icon = props.post.is_resolved ? Check : Remove

    return (
        <div className="post-card">
            <UserCard user={props.currentUser}></UserCard>
            <p>{props.post.question}</p>
            <Codeblock codeblock={props.post.codeblock}></Codeblock>
            <img className="resolution-icon" src={icon} alt="resolution symbol"></img>

            <p>{props.post.comments.length} Comments</p>

            {props.currentUser ? <Link to={`/post/${props.post._id}`}>View Comments</Link> : null}

            <PostInteractions
                post={props.post}
                currentUser={props.currentUser}
                markPostResolved={props.markPostResolved}
                handleDeletePost={props.handleDeletePost}
            ></PostInteractions>
        </div>
    )
}

export default PostCard