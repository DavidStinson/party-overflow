import React, { useState } from 'react'
// import '../../style/Post.css'

//Components
// import PostDetails from './PostDetails'
// import CommentSection from '../CommentComponents/CommentSection'
// import PostHeader from './PostHeader'

const PostCard = (props) => {
    const [showComments, setShowComments] = useState(false)

    return (
        <div className="post-card">
            {/* <PostHeader post={props.post} posts={props.posts} setPosts={props.setPosts} currentUser={props.currentUser}></PostHeader>
            <PostDetails post={props.post}></PostDetails>
            <button onClick={() => setShowComments(!showComments)}>Comments</button>
            {showComments ?
                <CommentSection
                    post={props.post}
                    postId={props.post._id}
                    comments={props.post.comments}
                    currentUser={props.currentUser}

                ></CommentSection>
                :
                null
            } */}
        </div>
    )
}

export default PostCard