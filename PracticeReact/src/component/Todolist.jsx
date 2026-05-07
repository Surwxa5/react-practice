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
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a todo....' />
      <button onClick={()=>{setTodos([...todos,{id:Date.now(),text:input}])
      setInput("")  //clear the box after adding
    }}>Add</button>
    </div>
  )
}

export default Todolist
