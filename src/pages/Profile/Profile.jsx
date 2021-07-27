import React, { useEffect, useState } from 'react'
import './Profile.css'

//Services
import { getUserPosts } from '../../services/postService'

//Components
import PostList from '../../components/Post/PostList'


const Profile = (props) => {
    const { _id, avatar, handle, solution_count } = props.currentUser
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        const fetchUserPosts = async (id) => {
            const response = await getUserPosts(id)
            setUserPosts(response.posts)
        }
        fetchUserPosts(_id)
    }, [_id])

    return (
        <div className="profile-page">
            <div className="profile-left">
                <div className="profile-user-info">
                    <img src={avatar} alt="user avatar"></img>
                    <h3>{handle}</h3>
                    <h4>Solution Count: {solution_count}</h4>
                    <button>Home</button>
                    <button>Create Post</button>
                    <button>Sign Out</button>
                </div>
            </div>
            <div className="profile-right">
                <div className="profile-post-container">
                    <div className="sub-container">
                        <div className="profile-posts-header">
                            <h3>Your Posts</h3>
                        </div>
                    </div>
                    {userPosts.length !== 0 &&
                        <PostList
                            posts={userPosts}
                            markPostResolved={props.markPostResolved}
                            handleDeletePost={props.handleDeletePost}
                            currentUser={props.currentUser}
                        ></PostList>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile