import React from 'react'
import '../../styles/App.css'

const Pagination = (props) => {

    return (
        <div className="pagination">
            {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>Back</button> : null}
            {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>Next</button> : null}
        </div>
    )
}

export default Pagination