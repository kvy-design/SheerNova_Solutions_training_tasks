import React from 'react';

function UserCard({name,role,avatar}){
  return (
    <div>
      <img src={avatar} />
      <h1>{name}</h1>
      <h1>{role}</h1>
    </div>
  )
}
export default UserCard
