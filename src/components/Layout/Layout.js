import React from 'react'
import Header from '../Header/Header'
import './Layout.css'

function Layout ({ children, title }) {
  return (
    <>
      <head>
        <title>Rubytify - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <div className="mainContainer">
        <Header title={title}/>
        {children}
      </div>
    </>
  )
}

export default Layout
