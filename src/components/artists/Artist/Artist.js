import React from 'react'
import PropTypes from 'prop-types'
import './Artist.css'

function Artist ({ id, name, image, genres, popularity, spotify_url }) {
  return (
    <div className="artistContainer">
      <img src={image}/>
    </div>
  )
}

Artist.propTypes = {

}

export default Artist