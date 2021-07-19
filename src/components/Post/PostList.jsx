import React from 'react'

//Components
import PostCard from './PostCard'

const PostList = (props) => {

    return (
        props.posts ?
            props.posts.map((post, index) => (
                <PostCard
                    key={index}
                    post={post}
                    markPostResolved={props.markPostResolved}
                    handleDeletePost={props.handleDeletePost}
                    currentUser={props.currentUser}
                />
            ))
            :
            null
    )
}

export default PostList