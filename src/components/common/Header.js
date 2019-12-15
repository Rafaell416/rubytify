import React from 'react'
import PropTypes from 'prop-types'
import { Heading1, Heading2, Heading3 } from '../typography'
import { colors } from '../../styles/colors'

function Header ({ children, title, left, right, size }) {

  const style = {
    backgroundColor: colors.dark,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: left ? 'left-align' : (right ? 'right-align' : 'center'),
    // border: '.5px solid',
    // borderBottomColor: colors.primary
  }

  if ( children ) {
    return (
      <div style={style}>
        {children}
      </div>
    )
  }

  if ( size === 'medium' ) {
    return (
      <div style={style}>
        <Heading2>{title}</Heading2>
      </div>
    )
  }

  if ( size === 'small' ) {
    return (
      <div style={style}>
        <Heading3>{title}</Heading3>
      </div>
    )
  }

  if ( size === 'large' ) {
    return (
      <div style={style}>
        <Heading1>{title}</Heading1>
      </div>
    ) 
  }
}

Header.propTypes = {
  title: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.string
}

Header.defaultProps = {
  size: 'large'
}

export default Header