import React from 'react'
import PropTypes from 'prop-types'
import { headingStyles } from '../../styles'

function Heading2 ({ children, style }) {
  return (
    <h2 style={{ ...headingStyles, ...style }}>
      {children}
    </h2>
  )
}

Heading2.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Heading2