import React from 'react'
import '../../styles/App.css'

//Components
import PostList from '../../components/Post/PostList'
// import PostForm from '../components/Post/PostForm'
import Pagination from '../misc/Pagination/Pagination'

const Feed = (props) => {

    return (
        <>
            <Pagination
                changePage={props.changePage}
                posts={props.posts}
                goBack={props.goBack}
                headerToggle={props.headerToggle}
                currentPage={props.currentPage}
            />
            <div className="spacing-block" />
            <PostList
                posts={props.posts}
                markPostResolved={props.markPostResolved}
                handleDeletePost={props.handleDeletePost}
                currentUser={props.currentUser}
            />
        </>
    )
}

export default Feed