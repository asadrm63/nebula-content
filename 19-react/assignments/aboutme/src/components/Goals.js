import React from 'react';

function Goals(props) {
  return (
    <div>
      <h2>Goals</h2>
      <p>These are my goals</p>
      
      <p> {props.goals1} </p>
      <p>{props.goals2}</p>
       <p>{props.goals3}</p>
    </div>
  );
}

export default Goals;