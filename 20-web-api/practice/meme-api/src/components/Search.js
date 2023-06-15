import React from 'react'

const Search = (props) => {
  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearch} placeholder="Search memes" />
    </div>
  )
}

export default Search
