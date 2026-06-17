import { useState } from "react";
import "./App.css"

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { 
      id: 1, 
      title: "todo1",
      completed: false
    },
    { 
      id: 2, 
      title: "todo2", 
      completed: false 
    },
    { 
      id: 3, 
      title: "todo3", 
      completed: false 
    },
  ]);

  const handleAddTodo = () => {
    setTodos([
      ...todos, 
      {
        id: todos.length + 1,
        title: title,
        completed: false
      }
    ])
  }

  return (
    <>
    <div>
      {title}
      {todos.map((todo) => (
      <div key={todo.id}>{todo.title}</div>
      ))}
    <input 
      type="text" 
      name="title" 
      placeholder="Add a todo" 
      onChange={(e)=>(setTitle(e.target.value))}
    />
    <button onClick={handleAddTodo}>Add</button>
    </div>
    </>
  )
}

export default App