import React, { useState } from 'react'
import '../../styles/PostCard.css'

// Assets
import Check from '../../assets/check.png'
import Remove from '../../assets/remove.png'



//Components
// import PostDetails from './PostDetails'
// import CommentSection from '../CommentComponents/CommentSection'
// import PostHeader from './PostHeader'
import CommentSection from '../Comment/CommentSection'

const PostCard = (props) => {
    const [showComments, setShowComments] = useState(false)
    const icon = props.post.is_resolved ? Check : Remove

    return (
        <div className="post-card">

            <p>{props.post.question}</p>
            <p>{props.post.codeblock}</p>
            <img className="resolution-icon" src={icon} alt="resolution symbol"></img>

            <button onClick={() => props.markPostResolved(props.post)}>Resolve</button>
            <button onClick={() => props.handleDeletePost(props.post)}>Delete</button>
            <button onClick={() => setShowComments(!showComments)}>Comments</button>
            {showComments ?
                <CommentSection></CommentSection>
                :
                null}
        </div>
    )
}

export default PostCard