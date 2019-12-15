import React from 'react'
import Header from '../Header'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Heading1 } from '../../typography'
import './Layout.css'

function Layout ({ children, title }) {
  return (
    <>
      <title>Rubytify - {title}</title>
      <div>
        <Header>
          <Link to="/">
            <Heading1>Rubytify</Heading1>
          </Link>
        </Header>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
