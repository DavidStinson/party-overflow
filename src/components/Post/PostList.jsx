import React from 'react'

//Components
import PostCard from './PostCard'

const PostList = (props) => {

    return (
        <div style={{ marginTop: '50px', background: '#f3f4f5', height: '100%' }}>
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