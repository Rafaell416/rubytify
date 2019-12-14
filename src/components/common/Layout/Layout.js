import React from 'react'
import Header from '../Header'
import './Layout.css'

function Layout ({ children, title }) {
  return (
    <>
      <title>Rubytify - {title}</title>
      <div>
        <Header title={title}/>
        {children}
      </div>
    </>
  )
}

export default Layout
