import React from 'react'

//Components
import PostCard from '../Post/PostCard'

const Feed = (props) => {
    const { posts } = props

    return (
        <div>
            {posts ?
                posts.map((post, index) => (
                    <PostCard
                        // key={index}
                        // post={post}
                        // posts={posts}
                        // setPosts={setPosts}
                        // currentUser={currentUser}
                    />
                ))
                :
                null
            }
        </div>
    )
}

export default Feed