import React from 'react'
import PropTypes from 'prop-types'
import './Artist.css'
import { Link } from "react-router-dom"


function Artist ({ id, name, image, genres, popularity, spotify_url }) {
  return (
    <Link to={`/${id}/albums`}>
      <div className="artistContainer">
        <img src={image} alt={name}/>
        <div className="overlayView">
          <span>{name}</span>
        </div>
      </div>
    </Link>
  )
}

Artist.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  genres: PropTypes.string,
  popularity: PropTypes.string,
  spotify_url: PropTypes.string
}

export default Artist