import { useState } from "react";
import "./App.css";


function App(){
  const [task, setTask] = useState("");
  const [todos,setTodos] = useState([]);


  //add new todo
 const addTodo =()=>{
  if(task.trim() === "") return;
  setTodos([...todos,{
    text:task,
    completed:false
  }]);
  setTask("");
 }

 //toggle complete
 const toggleTodo = (index)=>{
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed;
  setTodos(newTodos);
 }

 const deleteTodo = (index)=>{
  setTodos(todos.filter((_,i)=> i != index));
 }

  return (
    <div className="app">
      <h1>React Todo App</h1>
      <div className="input-group">
        <input type="text"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo,index)=>(
          <li 
            key={index}
            className={todo.completed ? "completed":""}
            onClick={()=>toggleTodo(index)}
          >
            {todo.text}
            <button className="delete-btn" onClick={(e)=>{
              e.stopPropagation();
              deleteTodo(index);
            }}
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;