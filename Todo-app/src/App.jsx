import { useState } from 'react'
import './App.css'
function App() {
  const [task, setTask]= useState("")
  const [todos, setTodos]=useState([]);

function addTask() {
  if (task.trim() === "") return;

  const newTodo = {
    id: Date.now(),
    text: task,
    completed: false,
  };

  setTodos([...todos, newTodo]);    
  setTask("");                   
}


  function toggleComplete(id){
    setTodos(
      todos.map((todo)=> 
        todo.id===id ? {...todo, completed: !todo.completed}: todo
      )
    );
  }

  function deleteTask(id){
    setTodos(todos.filter((todo)=> todo.id!==id));
  }


  return (
    <>
     <div className="container">
      <h1>Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(todo.id)}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
