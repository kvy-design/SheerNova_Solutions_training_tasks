import React from 'react'

export default function AvtarFlow({max ,avatars}) {
  return (
    <div>
      {
        avatars.slice(0,max).map((i,ind) => (
            <img width={200} height={200} src={i} key={ind}/>
        ))
      }
      <p>{avatars.length - max}+ more</p>
    </div>
  )
}
