import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PostCard.css'

//Components
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'
import PostInteractions from './PostInteractions'

const PostCard = (props) => {

    return (
        <div className="post-card">

            <div className="card-header">
                <UserCard user={props.post.added_by}></UserCard>

                <PostInteractions
                    post={props.post}
                    currentUser={props.currentUser}
                    markPostResolved={props.markPostResolved}
                    handleDeletePost={props.handleDeletePost}
                ></PostInteractions>
            </div>


            <div className="question-container">
                <p> {props.post.is_resolved && '[RESOLVED]'} {props.post.question}</p>
            </div>

            <div className="code-container">
                {props.post.codeblock && <Codeblock codeblock={props.post.codeblock}></Codeblock>}
            </div>


            <div className="comment-link">
                <Link style={{ textDecoration: 'none' }} to={`/post/${props.post._id}`}>View Comments</Link>
            </div>
        </div>
    )
}

export default PostCard