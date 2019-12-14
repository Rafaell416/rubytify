import React from 'react'
import PropTypes from 'prop-types'
import Artist from './Artist'

function ArtistsGrid ({ artists }) {
  return (
    <div style={style.artistsGrid}>
      {artists.map((artist) => <Artist key={artist.id} {...artist}/>)}
    </div>
  )
}

const style = {
  artistsGrid: {
    display: 'grid',
    gridGap: '1em',
    marginTop: 50,
    paddingLeft: 50,
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridAutoRows: 'minmax(150px, auto)'
  }
}

ArtistsGrid.propTypes = {
  artists: PropTypes.array.isRequired
}

export default ArtistsGrid