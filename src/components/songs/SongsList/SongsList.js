import React from 'react'
import PropTypes from 'prop-types'
import './SongsList.css'

function SongsList ({ songs }) {
  return (
    <ul>
      {songs.map(({ id, name, spotify_url }) => (
        <div className="songContainer">
          <li key={id}>{name}</li>
          <a className="spotifyButton" href={spotify_url} target="_blank">
            Play on Spotify
          </a>
        </div>
      ))}
    </ul>
  )
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired
}

export default SongsList