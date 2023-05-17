import React from 'react'
import singleIdCard from './singleIdCard'; 

// const [Id, setId]  = useState('[{}]');

function IdCardList(props) {
    return (
      <div>
        <h2>Id</h2>
        <img width="100" height="100" src="https://images.cdn4.stockunlimited.net/preview1300/silhouette-of-a-man_1441194.jpg"/>'
        <p>Name: {props.name}.</p>
        <p>Age: {props.age}</p>
        <p>Address:{props.Address}.</p>
        <p>Favorite Color  {props.favoriteColor}</p>
      </div>
    );
  }
  
  //     return (
  //     <div>
  //       <h2>Id</h2>
  //       {Id.map((item,i) => {
  //         return (
  //           <singleIdCard />
  //       // <img width="100" height="100" src="https://images.cdn4.stockunlimited.net/preview1300/silhouette-of-a-man_1441194.jpg"/>'
  //       // <p>Name: {props.name}.</p>
  //       // <p>Age: {props.age}</p>
  //       // <p>Address:{props.Address}.</p>
  //       // <p>Favorite Color  {props.favoriteColor}</p>
  //         )
  //       })}
  //     </div>
  //   );
  // }
  
  export default IdCardList;