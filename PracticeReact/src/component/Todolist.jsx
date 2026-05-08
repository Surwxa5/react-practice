import React, { useState } from 'react'

const Todolist = () => {
  // the list
  const [todos, setTodos] = useState([])
  // whats typed in the box
  const [input, setInput] = useState("")

  const addTodo = () =>{
    if (input.trim()=== "")
      return 
    setTodos([...todos,{id:Date.now(),text:input}])
    setInput= ""

    const DeleteTodo = (id) =>{
      setTodos(todos.filter(todo =>todo.id !== id))
    }
  }
  return (
    <div style={{maxWidth:"500px", margin:"40px auto",padding:"20px"}}>
      <h1>Todo List</h1>
      <p>{todo.length}todos remaining</p>
    {/* for input section and button */}
      <div style={{display:"flex", gap:"8px",marginBottom:"20px"}}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e)=>e.key === "Enter" && addTodo} placeholder='Add a todo....' />
      <button 
       onClick={addTodo}
    >Add</button>
    </div>
    {todos.length === 0}

    </div>
  )
}

export default Todolist
