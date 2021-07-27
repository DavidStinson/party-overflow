import React from 'react'
import '../styles/App.css'

// Components
import Feed from '../components/Layout/Feed'
import CreatePost from '../components/CreateForms/CreatePost/CreatePost'

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

                    setPosts={props.setPosts}
                    setDisplay={props.setDisplay}
                    setHeaderToggle={props.setHeaderToggle}
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


