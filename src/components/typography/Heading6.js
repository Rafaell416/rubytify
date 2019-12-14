import React from 'react'
import PropTypes from 'prop-types'
import { headingStyles } from '../../styles'

function Heading6 ({ children, style }) {
  return (
    <h6 style={{ ...headingStyles, ...style }}>
      {children}
    </h6>
  )
}

Heading6.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Heading6