import React from 'react'
import PropTypes from 'prop-types'
import { headingStyles } from '../../styles'

function Heading4 ({ children, style }) {
  return (
    <h4 style={{ ...headingStyles, ...style }}>
      {children}
    </h4>
  )
}

Heading4.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Heading4