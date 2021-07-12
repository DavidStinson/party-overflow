import React from 'react'


const Pagination = (props) => {

    return (
        <div>
            {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>Back</button> : null}
            {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>Next</button> : null}
        </div>
    )
}

export default Pagination