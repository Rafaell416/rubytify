import React from 'react'
import PropTypes from 'prop-types'
import { Heading2 } from '../../typography'
import { colors } from '../../../styles'
import { Link } from 'react-router-dom'

function Button ({ 
  children, 
  link, 
  outline, 
  to,
  }) {
  const styles = {
    buttonContainer: {
      backgroundColor: outline ? 'transparent' : colors.primary,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      border: outline ? '.5px solid' : 'none',
      borderColor: colors.primary,
      borderRadius: 25,
      cursor: 'pointer',
      outline: 'none',
      marginLeft: 5,
      marginRight: 5
    }
  }

    if (link) {
      return (
        <Link style={{ textDecoration: 'none' }} to={to}>
          <button style={styles.buttonContainer}>
            <Heading2>
              {children}
            </Heading2>
          </button>
        </Link>
      )
    } else {
      return (
        <button style={styles.buttonContainer}>
          <Heading2>
            {children}
          </Heading2>
        </button>
      )
    }
} 

Button.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
  outline: PropTypes.bool
}

export default Button