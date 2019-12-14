import React from 'react'
import PropTypes from 'prop-types'
import { headingStyles } from '../../styles'

function Heading3 ({ children, style }) {
  return (
    <h3 style={{ ...headingStyles, ...style }}>
      {children}
    </h3>
  )
}

Heading3.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Heading3