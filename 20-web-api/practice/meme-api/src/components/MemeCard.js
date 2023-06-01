import React from 'react'
// import Search from './Search.js'

const MemeCard = (props) => {
    console.log(props)
  return (
    <div className='memeCard'>
        <h1>{props.name}</h1>
        <img src={props.url} alt={props.name}/>
        {/* <Search/> */}
    </div>
  )
}

export default MemeCard
