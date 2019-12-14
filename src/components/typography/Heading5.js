import React from 'react'
import PropTypes from 'prop-types'
import { headingStyles } from '../../styles'

function Heading5 ({ children, style }) {
  return (
    <h5 style={{ ...headingStyles, ...style }}>
      {children}
    </h5>
  )
}

Heading5.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Heading5