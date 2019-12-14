import React from 'react'
import PropTypes from 'prop-types'
import Album from '../Album/Album'
import './AlbumsGrid.css'

function AlbumsGrid ({ albums }) {
  return (
    <div className="albums">
      {albums.map((album) => <Album key={album.id} {...album}/>)}
    </div>
  )
}

AlbumsGrid.propTypes = {
  albums: PropTypes.array.isRequired
}

export default AlbumsGrid