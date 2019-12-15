import React from 'react'
import ContentLoader from "react-content-loader"
import { colors } from '../../../styles'

function GridLoader () {
  return (
    <ContentLoader 
      height={200} 
      width={400}
      speed={1}
      primaryColor={colors.primary}
      secondaryColor={colors.dark}
    >
      <circle cx="30" cy="30" r="25" />
      <circle cx="105" cy="30" r="25" />
      <circle cx="185" cy="30" r="25" />
      <circle cx="265" cy="30" r="25" />
      <circle cx="350" cy="30" r="25" />

      <circle cx="30" cy="90" r="25" />
      <circle cx="105" cy="90" r="25" />
      <circle cx="185" cy="90" r="25" />
      <circle cx="265" cy="90" r="25" />
      <circle cx="350" cy="90" r="25" />

      <circle cx="30" cy="150" r="25" />
      <circle cx="105" cy="150" r="25" />
      <circle cx="185" cy="150" r="25" />
      <circle cx="265" cy="150" r="25" />
      <circle cx="350" cy="150" r="25" />
    </ContentLoader>
  )
}

export default GridLoader