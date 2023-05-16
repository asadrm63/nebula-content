import React from 'react'

function About(props) {
    return (
      <div>
        <h2>About</h2>
        <p>My name is {props.name}.</p>
        <p>I am {props.age} years old.</p>
        <p>My Occupation is {props.Occupation}.</p>
        <p>My favorite color is {props.favoriteColor}</p>
      </div>
    );
  }
  
  export default About;