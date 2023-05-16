import React from 'react';

function Hobbies(props) {
  return (
    <div>
      <h2>Hobbies</h2>
      <p> These are my hobbies</p>
      <p>{props.hobby1}</p>
       <p>{props.hobby2}</p>
       <p>{props.hobby3}</p>
    </div>
  );
}

export default Hobbies;