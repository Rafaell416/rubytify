import React from 'react'
import './Header.css'

function Header ({ title }) {
  return (
    <div className="headerContainer">
      <h3>{title}</h3>
    </div>
  )
}

export default Header