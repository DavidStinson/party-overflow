import React from 'react'
import '../styles/App.css'

//Components
import PostForm from '../components/Post/PostForm'
import Feed from '../components/Layout/Feed'


const Home = (props) => {

    return (
        <div className="layout">
            {props.display ?
                <Feed
                    posts={props.posts}
                    currentUser={props.currentUser}

                    goBack={props.goBack}
                    changePage={props.changePage}
                    currentPage={props.currentPage}
                    headerToggle={props.headerToggle}

                    markPostResolved={props.markPostResolved}
                    handleDeletePost={props.handleDeletePost}
                />
                :
                <PostForm
                    setDisplay={props.setDisplay}
                    handleCreatePost={props.handleCreatePost}
                    currentUser={props.currentUser}
                />
            }
        </div>
    )
}

export default Home


