import React from 'react'
import '../../../styles/Header.css'

// Components
import Search from '../../misc/Search/Search'

const Pagination = (props) => {
    console.log(props)

    return (
        <div className="hidden-container">
            <div className="header">
                <h3>{props.headerToggle ? 'Recent Posts' : 'Search Results'}</h3>
                <Search
                    setPosts={props.setPosts}
                    setDisplay={props.setDisplay}
                    setHeaderToggle={props.setHeaderToggle}
                ></Search>
                {props.headerToggle ?
                    <div className="header-buttons">
                        {props.currentPage > 0 ? <button value="-1" onClick={(e) => props.changePage(e)}>Back</button> : null}
                        {props.posts.length ? <button value="1" onClick={(e) => props.changePage(e)}>Next</button> : null}
                    </div>
                    :
                    <div className="header-buttons">
                        <button onClick={() => props.goBack()}>Back</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Pagination

