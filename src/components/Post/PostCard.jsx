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
    const viewCommentText = `View ${props.post.comments.length} ${props.post.comments.length === 1 ? 'Comment' : 'Comments'}`

    return (
        <div style={{ marginTop: "50px" }} className="post-card">

            <UserCard user={props.post.added_by}></UserCard>

            <p>{props.post.question}</p>

            {props.post.codeblock ? <Codeblock codeblock={props.post.codeblock}></Codeblock> : null}

            <img className="resolution-icon" src={icon} alt="resolution symbol"></img>

            <Link to={`/post/${props.post._id}`}>{viewCommentText}</Link>

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