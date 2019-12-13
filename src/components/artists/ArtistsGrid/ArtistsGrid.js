import React from 'react'
import PropTypes from 'prop-types'
import Artist from '../Artist/Artist'
import './ArtistsGrid.css'

function ArtistsGrid ({ artists }) {
  return (
    <div className="artists">
      {artists.map((artist) => <Artist key={artist.id} {...artist}/>)}
    </div>
  )
}

ArtistsGrid.propTypes = {
  artists: PropTypes.array.isRequired
}

export default ArtistsGrid