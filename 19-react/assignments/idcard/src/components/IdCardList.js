import React from "react";
import SingleIdCard from "./SingleIdCard";

function IdCardList(props) {
  const { idCards } = props;

  return (
    <div>
      <h2>ID Cards</h2>
      {idCards.map((idCard, index) => (
        <SingleIdCard key={index} idCard={idCard} />
      ))}
    </div>
  );
}

export default IdCardList;
