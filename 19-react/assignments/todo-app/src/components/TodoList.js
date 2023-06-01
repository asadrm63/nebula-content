import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todos from './Todos';
import { Link } from 'react-router-dom';

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [todo, ...todos]; 

        setTodos(newTodos)
        console.log('NewTodo', todo, `\n`, `OldTodos:`, ...todos)
      }

      const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
      
        setTodos(removeArr);
      }

      const completeTodo = id => {
        let updatedTodos = todos.map(todo=> {
          if(todo.id === id){
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
        setTodos(updatedTodos);
      }

      const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      }
      const sortTodos = (sortDirection) =>{
        let sorted = [...todos];
        if (sortDirection ==="ASC") {
            sorted.sort((a,b) => {
                if (a.text <b.text ) {
                    return -1;
                }
                if (a.text >b.text){
                    return 1;
                } 
                return 0;
            });
        } else if (sortDirection ==="DES"){
            sorted.sort((a,b) =>{
                if (a.text.toLowerCase() > b.text.toLowerCase()) {
                    return -1;
                }
                if (a.text.toLowerCase() < b.text.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        }
            setTodos(sorted);
      };
   

  return (
    <div>
    <h1>What needs to be done today?</h1>
    <button className='todo-button' onClick={() => sortTodos ("ASC")} >ASC</button>
    <button className='todo-button' onClick={() => sortTodos ("DES")} >DSC</button>
    <Link to="/contact"><button className='todo-button'>Contact</button></Link>
      <TodoForm onSubmit={addTodo} /> 
    <Todos todos={todos} completeTodos={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList
