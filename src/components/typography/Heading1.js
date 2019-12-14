import React from 'react'
import PropTypes from 'prop-types'
import { headingStyles } from '../../styles'

function Heading1 ({ children, style }) {
  return (
    <h1 style={{ ...headingStyles, ...style }}>
      {children}
    </h1>
  )
}

Heading1.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Heading1