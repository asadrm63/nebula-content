import React, { useState } from "react";
import IdCardList from "./components/IdCardList";

function IdCreator() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [idCards, setIdCards] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleColorChange = (event) => {
    setFavoriteColor(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const idCard = {
      name: name,
      age: age,
      address: address,
      favoriteColor: favoriteColor,
    };
    setIdCards([...idCards, idCard]);
    setName("");
    setAge("");
    setAddress("");
    setFavoriteColor("");
    setShowInfo(true);
  };

  return (
    <div>
      <h1>Fill out this form to create your ID card</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <label>
          Favorite Color:
          <input
            type="text"
            value={favoriteColor}
            onChange={handleColorChange}
          />
        </label>
        <br />
        <input type="submit" value="Create ID Card" />
      </form>

      {showInfo && <IdCardList idCards={idCards} />}
    </div>
  );
}

export default IdCreator;
