import React from 'react'

export default function Breadcrumb({paths}) {
  return (
    <div>
      {
        paths.map((item)=>(
            <p>{item}</p>
        ))
      }
    </div>
  )
}
