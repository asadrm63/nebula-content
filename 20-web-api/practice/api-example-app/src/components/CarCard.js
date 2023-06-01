import React from 'react'

const CarCard = (props) => {
  console.log(props.car)
  return (
    <div className='card' > 
        <h1>{props.car.name} </h1>
         <h3>Year:{props.car.year} </h3>
         <h4>{props.car.isAvailable} </h4>
         <h3 className='additional-info '>{props.car.additionalInfo} </h3>
         <h3>Starting Price:{props.car.startingPrice} </h3>
         <img src={props.car.image}/>
        
    </div>
  )
}

export default CarCard
