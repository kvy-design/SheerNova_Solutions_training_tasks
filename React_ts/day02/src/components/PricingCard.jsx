import React from 'react'

export default function PricingCard({name , price , popular , features}) {
  return (
    <div>
        <h1>{name}</h1>
        <h3>${price}</h3>
        {popular && <p>Popular</p>}
      {
        features.map((feature)=>(
             <li key={feature}>{feature}</li>
        ))
      }
    </div>
  )
}
