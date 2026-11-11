import React, { useState } from 'react'

export default function NavBar() {
    const links = ["Home", "Products", "About", "Contact"]
    const [activeLink , setActiveLink] = useState('Home')
  return (
    <div>
      {
        links.map((link) => (
            <button
                key = {link}
                className={activeLink === link ? 'active' : ''}
                onClick={() => setActiveLink(link)}
            >
                {link}
            </button>
        ))
      }
    </div>
  )
}
