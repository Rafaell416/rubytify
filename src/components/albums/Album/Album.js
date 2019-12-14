import React from 'react'
import PropTypes from 'prop-types'
import './Album.css'
import { Link } from "react-router-dom"


function Album ({ id, name, image, spotify_url, total_tracks }) {
  return (
    <Link to={`/albums/${id}/songs`} style={{ textDecoration: 'none' }}>
      <div className="albumContainer">
        <img src={image} alt={name}/>
      </div>
      <div className="nameContainer">
        <span>{name}</span>
      </div>
    </Link>
  )
}

Album.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  spotify_url: PropTypes.string,
  total_tracks: PropTypes.number
}

export default Album