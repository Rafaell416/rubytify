import React from 'react'
import Heading1 from '../typography/Heading1'
import { colors } from '../../styles/colors'

function Header ({ title }) {
  return (
    <div style={style}>
      <Heading1>{title}</Heading1>
    </div>
  )
}

const style = {
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '.5px solid',
  borderBottomColor: colors.primary
}

export default Header