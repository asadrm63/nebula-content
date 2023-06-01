import MemeCard from './components/MemeCard';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // update our import
  const [memes, setMemes] = useState([]);

  // create our useEffect
  useEffect(() => {
  // fetch the data
fetch(`https://api.imgflip.com/get_memes`)
// convert the data from json into an object
.then(res => res.json())

// return that object
.then(res => setMemes(res.data.memes))

// log the response 
.then(res => console.log(res.data.memes))
},[])

  return (
    <div className="App">
  {memes.map(meme => <MemeCard key={meme} meme ={meme}/>)}

  {/* <MemeCard memes={setMemes} /> */}
    </div>
  );
}

export default App;
