import React, { useState } from 'react'

const SearchBar = (props) => {
    const [keyword, setKeyword] = useState()

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <form onSubmit={() => props.handleSearch(keyword)}>
            <input
                placeholder="Search By Keyword"
                name="keyword"
                value={keyword}
                onChange={handleChange}
            ></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar
