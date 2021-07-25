import React from 'react'
import '../../styles/PostCard.css'

const PostInteractions = (props) => {

    return (
        props.currentUser && props.currentUser._id === props.post.added_by._id ?
            <div className="interactions">
                {!props.post.is_resolved &&
                    <button onClick={() => props.markPostResolved(props.post)}>Resolve</button>
                }
                <button onClick={() => props.handleDeletePost(props.post)}>Delete</button>
            </div>
            :
            null
    )
}

export default PostInteractions