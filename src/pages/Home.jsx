import React from 'react'
import '../styles/App.css'

//Components
import CreatePost from '../components/Post/CreatePost/CreatePost'
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
                <CreatePost
                    setDisplay={props.setDisplay}
                    currentUser={props.currentUser}
                    handleCreatePost={props.handleCreatePost}
                />
            }
        </div>
    )
}

export default Home


