import React from 'react'
import '../../styles/Pagination.css'


const Pagination = (props) => {

    return (
        <div className="hidden-container">
            {props.headerToggle ?
                <div className="pagination">
                    <h3>Recent Posts</h3>
                    <div className="pagination-buttons">
                        {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>Back</button> : null}
                        {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>Next</button> : null}
                    </div>
                </div>
                :
                <div className="pagination">
                    <h3>Search Results</h3>
                    <div className="pagination-buttons">
                        <button onClick={() => props.goBack()}>Back</button>
                    </div>
                </div>}
        </div>
    )
}

export default Pagination

