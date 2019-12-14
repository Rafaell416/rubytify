import React from 'react'
import PropTypes from 'prop-types'
import { bodyTextStyles } from '../../styles'

function Body ({ children, style, size, color }) {
  return (
    <span style={{ ...bodyTextStyles, ...style, ...{fontSize: size}, ...{color} }}>
      {children}
    </span>
  )
}

Body.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Body