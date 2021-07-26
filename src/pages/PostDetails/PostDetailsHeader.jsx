import React from 'react'
import '../../styles/Header.css'

const PostDetailsHeader = (props) => {

    return (
        <div className="hidden-container">
            <div className="header">
                <h3>Post Details</h3>
                <div className="header-buttons">
                    <button onClick={() => props.history.push('/home')}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetailsHeader