import { useState } from "react";



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

  return (
    <div>
      <h1>React Todo App</h1>
      <div>
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