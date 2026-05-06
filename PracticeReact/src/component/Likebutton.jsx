import React, { useState } from 'react'

const Likebutton = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>Likes :{count}</p>
      <button onClick={()=> setCount(count+1)} style={{backgroundColor:count>10 ? "red":"white",fontSize:"20px"}}>Heart</button>
      <button onClick={()=>setCount(0)
      }>Reset</button>
    </div>
  )
}

export default Likebutton
