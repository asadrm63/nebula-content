import React from "react";

function SingleIdCard(props) {
  const { name, age, address, favoriteColor } = props.idCard;

  return (
    <div className="listItem">
      <h1>{name}</h1>
      <img
        width="100"
        height="100"
        src="https://images.cdn4.stockunlimited.net/preview1300/silhouette-of-a-man_1441194.jpg"
        alt="Profile"
      />
      <p>Name: {name}.</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <p>Favorite Color: {favoriteColor}</p>
      </div>
      );
}

export default SingleIdCard;