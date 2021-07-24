import React from 'react'
import '../../styles/PostCard.css'

//Components
import PostCard from './PostCard'

const PostList = (props) => {

    return (
        <div className="post-list">
            {props.posts &&
                props.posts.map((post, index) => (
                    <PostCard
                        key={index}
                        post={post}
                        markPostResolved={props.markPostResolved}
                        handleDeletePost={props.handleDeletePost}
                        currentUser={props.currentUser}
                    />
                ))
            }
        </div>
    )
}

export default PostList