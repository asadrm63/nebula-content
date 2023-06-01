import './App.css';
import carjson from './carjson';
// import Person from './components/Person';
import CarList from './components/CarList';

function App() {
  console.log({carjson})
  return (
    <div className="App">
      <CarList  cars={carjson.cars} />
   
    </div>
  );
}


export default App;
