import React from 'react'
import ContentLoader from "react-content-loader"
import { colors } from '../../../styles'

function ListLoader () {
  return (
    <ContentLoader 
      height={200} 
      width={400}
      speed={1}
      primaryColor={colors.primary}
      secondaryColor={colors.dark}
    >
     <rect x="5" y="5" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="25" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="45" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="65" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="85" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="105" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="125" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="145" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="165" rx="0" ry="0" width="385" height="15" />
     <rect x="5" y="185" rx="0" ry="0" width="385" height="15" />
    </ContentLoader>
  )
}

export default ListLoader