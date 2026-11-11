import React from 'react'
import { useState } from 'react'

export default function ToggleSection({title,children}) {
    const [isOpen , setIsOpen] = useState(true)
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={()=>{
        setIsOpen(!isOpen)
      }}>
        {isOpen ? 'Hide' : 'Show'}
      </button>
      {isOpen && children}
    </div>
  )
}
