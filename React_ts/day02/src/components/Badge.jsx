import React from 'react'

export default function Badge({status}) {
  return (
    <div>
      <span>
        {status === 'success' ? 'Success' : status === 'Warning' ? 'Warning' : 'Error'}
      </span>
    </div>
  )
}
