import React from 'react'
import '../styles/App.css'

//Components
import PostList from '../components/Post/PostList'
import PostForm from '../components/Post/PostForm'
import Pagination from '../components/misc/Pagination'

const Home = (props) => {

    return (
        <div className="layout">
            {props.display ?
                <>
                    <Pagination
                        headerToggle={props.headerToggle}
                        changePage={props.changePage}
                        currentPage={props.currentPage}
                        setHeaderToggle={props.setHeaderToggle}
                        posts={props.posts}
                        goBack={props.goBack}
                    />
                    <div className="spacing-block"/>
                    <PostList
                        posts={props.posts}
                        markPostResolved={props.markPostResolved}
                        handleDeletePost={props.handleDeletePost}
                        currentUser={props.currentUser}
                    />
                </>
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