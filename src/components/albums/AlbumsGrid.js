import React from 'react'
import PropTypes from 'prop-types'
import Album from './Album'
import GridLoader from '../common/loaders/GridLoader'

function AlbumsGrid ({ albums }) {
  if ( albums.length == 0 ) return <GridLoader />
  return (
    <div style={style.gridContainer}>
      {albums.map((album) => <Album key={album.id} {...album}/>)}
    </div>
  )
}

const style = {
  gridContainer: {
    display: 'grid',
    gridGap: '1em',
    marginTop: 50,
    paddingLeft: 50,
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridAutoRows: 'minmax(150px, auto)'
  }
}

AlbumsGrid.propTypes = {
  albums: PropTypes.array.isRequired
}

export default AlbumsGrid