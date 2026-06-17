import "./App.css"

const App = () => {
  const todos = [
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
  ]

  return (
    <>
    <div>
      {todos.map((todo) => 
      <div key={todo.id}>{todo.title}</div>)}
    </div>
    </>
  )
}

export default App