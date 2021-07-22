import React from 'react'

//Components
import PostCard from './PostCard'

const PostList = (props) => {

    return (
        <div style={{ marginTop: '55px' }}>
            {props.posts ?
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
                null}
        </div>
    )
}

export default PostList