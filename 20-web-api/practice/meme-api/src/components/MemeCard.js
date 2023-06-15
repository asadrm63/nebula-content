import React from 'react'
// import Search from './Search.js'

const MemeCard = (props) => {
    console.log(props)
  return (
    <div className='memeCard'>
        {/* <Search/> */}
        <h1>{props.meme.name}</h1>
        <img src={props.meme.url} alt={props.meme.name}/>
    </div>
  )
}

export default MemeCard
