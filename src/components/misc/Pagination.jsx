import React from 'react'
import '../../styles/Pagination.css'


const Pagination = (props) => {
    //rename to header

    return (
        props.headerToggle ?
            <div className="pagination">
                <h3>Recent Posts</h3>
                {/* {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>Back</button> : null}
                {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>Next</button> : null} */}
            </div>
            :
            <div className="pagination">
                <h3>Search Results</h3>
            </div>

    )
}

export default Pagination