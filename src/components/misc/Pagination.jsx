import React from 'react'
import '../../styles/Pagination.css'

import Left from '../../assets/left.png'

import Right from '../../assets/right.png'

console.log(Left)

const Pagination = (props) => {


    return (
        <div className="pagination">
            <h3>Recent Posts</h3>
            {/* {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>&#8249;</button> : null}
            {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>&#8250;</button> : null} */}

            {props.currentPage > 0 ? <img src={Left} alt="left arrow" value="-1" onClick={(e) => props.changePage(e)}></img> : null}
            {props.posts.length ? <img value="1" onClick={(e) => props.changePage(e)}></img> : null}
        </div>
    )
}

export default Pagination