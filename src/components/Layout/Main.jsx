import React, { useState, useEffect } from 'react'
import '../../styles/App.css'

//Components


//Services
import { getRecent, createPost } from '../../services/postService'

const Main = (props) => {
    const { display, setDisplay, currentUser } = props
    
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    const changePage = (e) => {
        setCurrentPage(currentPage + parseInt(e.target.value))
    }

    useEffect(() => {
        let componentMounted = true
        getRecent(currentPage).then((posts) => {
            if (componentMounted) {
                setPosts(posts)
            }
        })
        return () => { componentMounted = false }
    }, [currentPage])


    return (
        <div className="layout">
            Main
        </div>
    )
}

export default Main