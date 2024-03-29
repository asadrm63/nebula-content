import React,{useState} from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function Todo({todos,completeTodo, removeTodo, updateTodo}){
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  console.log(Todo)

  const submitUpdate = newTodo => {
    updateTodo(edit.id, newTodo)
    setEdit({
      id: null, 
      value: ''
    })
  }
  if(edit.id){
    return <TodoForm onSubmit={submitUpdate} />
  }

  return todos.map((todo, idx) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={idx}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
      <RiCloseCircleLine 
onClick={() => removeTodo(todo.id)}
className='delete-icon'
/>
<TiEdit 
onClick={() => setEdit({id: todo.id, value:todo.text})}
className='edit-icon'
/>
  </div>
    </div>
  ));
}
