import React from 'react'
import '../../../styles/Header.css'

const Pagination = (props) => {

    return (
        <div className="hidden-container">
            <div className="header">
                {props.headerToggle ?
                    <>
                        <h3>Recent Posts</h3>
                        <div className="header-buttons">
                            {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>Back</button> : null}
                            {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>Next</button> : null}
                        </div>
                    </>
                    :
                    <>
                        <h3>Search Results</h3>
                        <div className="header-buttons">
                            <button onClick={() => props.goBack()}>Back</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Pagination
