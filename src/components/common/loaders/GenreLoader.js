import React from 'react'
import ContentLoader from "react-content-loader"
import { colors } from '../../../styles'

function GenreLoader () {
  return (
    <ContentLoader 
      height={30} 
      width={400}
      speed={1}
      primaryColor={colors.primary}
      secondaryColor={colors.dark}
    >
      <rect y="5" x="5" rx="8" ry="30" width="50" height="14" />
      <rect y="5" x="60" rx="8" ry="30" width="50" height="14" />
      <rect y="5" x="115" rx="8" ry="30" width="50" height="14" />
      <rect y="5" x="170" rx="8" ry="30" width="50" height="14" />
      <rect y="5" x="225" rx="8" ry="30" width="50" height="14" />
      <rect y="5" x="280" rx="8" ry="30" width="50" height="14" />
      <rect y="5" x="335" rx="8" ry="30" width="50" height="14" />
    </ContentLoader>
  )
}

export default GenreLoader