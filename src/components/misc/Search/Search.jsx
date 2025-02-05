import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import './Search.css'

//Services
import { search } from '../../../services/postService'

const SearchBar = (props) => {
  const history = useHistory()
  const [keyword, setKeyword] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await search(keyword)
      setKeyword('')
      props.setDisplay(true)
      props.setHeaderToggle(false)
      props.setPosts(response.posts)
      history.push('/home')
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }


  return (
    <div className="search-container">
      <form className="search" onSubmit={handleSearch}>
        <img className="search-icon" src="https://i.imgur.com/iuEJ77t.png" alt="magnifying glass"></img>
        <input
          autoComplete="off"
          placeholder="Search"
          name="keyword"
          value={keyword}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  )
}

export default SearchBar
