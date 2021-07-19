import React, { useState } from 'react'
import '../../styles/NavBar.css'


//Services
import { search } from '../../services/postService'

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState('')

  const handleSearch = async (e) => {
    //search might need page limit at some point
    e.preventDefault()
    try {
      const response = await search(keyword)
      props.setPosts(response.posts)
      setKeyword('')
    } catch (error) {
      throw error
    }
  }


  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <form className="search" onSubmit={handleSearch}>
      <button type="submit">
        <img className="search-icon"  src="https://i.imgur.com/iFtGXxX.png" alt="magnifying glass"></img>
      </button>
      <input
        autoComplete="off"
        placeholder="Search"
        name="keyword"
        value={keyword}
        onChange={handleChange}
      ></input>

    </form>
  )
}

export default SearchBar
