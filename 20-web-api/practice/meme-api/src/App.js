import MemeCard from './components/MemeCard';
import React, { useState, useEffect } from 'react';
import './App.css';
// import Search from './components/Search.js';

function App() {
  // update our import
  const [memes, setMemes] = useState([]);
  const [searchText, setSearchText] = useState('');

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

const handleSearch = (event) => {
  setSearchText(event.target.value);
};

const filteredMemes = memes.filter((meme) => {
  return meme.name.toLowerCase().includes(searchText.toLowerCase());
});


  return (
    <div className="App">
<h1>MEME GALLERY</h1>
<input type="text" value={searchText} onChange={handleSearch} placeholder="Search memes" />
  {filteredMemes.map(meme => <MemeCard key={meme} meme ={meme}/>)}
  {/* <MemeCard memes={setMemes} /> */}
    </div>
  );
}

export default App;
