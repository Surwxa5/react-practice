import React from 'react'


const UserCard = ({name,email,city,company}) => {
  
  return (
    <div>
     <h2>{name}</h2>
     <p>{email}</p>
     <p>{city}</p>
     <p>{company}</p>
    </div>
  )
}

export default UserCard
