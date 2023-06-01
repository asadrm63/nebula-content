import React from 'react'
import CarCard from './CarCard'

const CarList = (props) => {
  return (
    <div className='card-container'>
        <h1> My Dream Garage</h1>
        {props.cars.map((car) => (
        <CarCard car={car} />
      ))}
    </div>
  )
}

export default CarList
