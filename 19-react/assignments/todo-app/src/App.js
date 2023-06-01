import TodoList from './components/TodoList';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    {/* <TodoList/> */}
    <Routes>
    <Route path="/" element={<TodoList />} />
    <Route path="contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
