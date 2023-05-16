import React,{useState} from "react";
import About from "./components/About";
import Goals from "./components/Goals";
import Hobbies from "./components/Hobbies";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [Occupation, setOccupation] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [goals1, setGoals1] = useState('');
  const [goals2, setGoals2] = useState('');
  const [goals3, setGoals3] = useState('');
  const [hobby1, setHobby1] = useState('');
  const [hobby2, setHobby2] = useState('');
  const [hobby3, setHobby3] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleOccupation = (event) => {
    setOccupation(event.target.value);
  };

  const handleColorChange = (event) => {
    setFavoriteColor(event.target.value);
  };
  const handleGoals1Change = (event) => {
    setGoals1(event.target.value);
  };
  const handleGoals2Change = (event) => {
    setGoals2(event.target.value);
  };
  const handleGoals3Change = (event) => {
    setGoals3(event.target.value);
  };
  const handleHobby1Change = (event) => {
    setHobby1(event.target.value);
  };
  const handleHobby2Change = (event) => {
    setHobby2(event.target.value);
  };
  const handleHobby3Change = (event) => {
    setHobby3(event.target.value);
  };


  return (
    <div>
      <h1>Fill out this form</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Occupation:
          <input
            type="text"
            value={Occupation}
            onChange={handleOccupation}
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
        <label>
          Goal 1:
          <input
            type="text"
            value={goals1}
            onChange={handleGoals1Change}
          />
        </label>
        <label>
          Goal 2:
          <input
            type="text"
            value={goals2}
            onChange={handleGoals2Change}
          />
        </label>
        <label>
          Goal 3:
          <input
            type="text"
            value={goals3}
            onChange={handleGoals3Change}
          />
        </label>
        <label>
          Hobby 1:
          <input
            type="text"
            value={hobby1}
            onChange={handleHobby1Change}
          />
        </label>
        <label>
          Hobby 2:
          <input
            type="text"
            value={hobby2}
            onChange={handleHobby2Change}
          />
        </label>
        <label>
          Hobby 3:
          <input
            type="text"
            value={hobby3}
            onChange={handleHobby3Change}
          />
        </label>
      </form>
      <About Me name={name} age={age} Occupation={Occupation} favoriteColor={favoriteColor} />
      <Goals goals1={goals1} goals2={goals2} goals3={goals3} />
      <Hobbies  hobby1={hobby1} hobby2={hobby2} hobby3={hobby3}/>
    </div>
  );
}

export default App;
