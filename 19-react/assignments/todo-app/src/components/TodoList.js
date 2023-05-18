import {useState} from 'react'
import TodoForm from './TodoForm';
// import Todos from './Todos';

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

      const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      }
      const submitUpdate = newTodo => {
        updateTodo(edit.id, newTodo)
        setEdit({
          id: null, 
          value: ''
        })
      }

  return (
    <div>
    <h1>What needs to be done today?</h1>
    <TodoForm onSubmit={addTodo}/>  
    <todos todos={todos} completeTodos={completeTodos} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList
