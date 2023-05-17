import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import About from "./components/IdCardList";

function IdCreator() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [Address, setAddress] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [showInfo, setShowInfo] = useState(false)


  // add array use map 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleColorChange = (event) => {
    setFavoriteColor(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowInfo(true)
  }


  return (
    <div>
      <h1>Fill out this form to makea your id card</h1>
      <form className='form' onSubmit={handleSubmit}>
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
          <input
            type="text"
            value={Address}
            onChange={handleAddress}
          />
        </label>
        <label>
          Favorite Color:
          <input
            type="text"
            value={favoriteColor}
            onChange={handleColorChange}
          />
        </label>
        <input type='submit' />
      </form>

      {showInfo ?
      <>
      <About Me name={name} age={age} Address={Address} favoriteColor={favoriteColor} />
      </>
        :null}
      </div>
      );
    }
  
    
export default IdCreator;
