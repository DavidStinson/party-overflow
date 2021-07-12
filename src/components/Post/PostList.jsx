import React from 'react'

//Components
import PostCard from './PostCard'

const PostList = (props) => {
    const { posts } = props

    return (
        <div>
            {posts ?
                posts.map((post, index) => (
                    <PostCard
                        key={index}
                        post={post}
                        markPostResolved={props.markPostResolved}
                        handleDeletePost={props.handleDeletePost}
                    />
                ))
                :
                null
            }
        </div>
    )
}

export default PostList