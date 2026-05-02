import React, { useState } from 'react'
const UsestatePractice = () => {
const [form,setform]=useState({
  name:"",
  rollno:"",
  address:"",
  dob:""
})
const handlechage=(e)=>{
 const {name,value}=e.target
  setform({
    ...form,
    [name]:value
  })
}

  return (
    <div>
      <form action="" >
     Name=<input type="text" name='name'value={form.name} onChange= {handlechage} placeholder='Enter you name' />
     Rollno=<input type="number" name='rollno' onChange= {handlechage}  value={form.rollno}  placeholder='Enter you Rollno' />
   Address=<input type="text" name='address' onChange= {handlechage}  value={form.address} placeholder='Enter you address' />
     dob=<input type="date" onChange= {handlechage}  name='dob'value={form.dob} placeholder='Enter you date of birth' />
    
     </form>
     <div>
      Name={form.name}
     </div>
    </div>

  )
}

export default UsestatePractice
