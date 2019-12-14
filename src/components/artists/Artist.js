import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Body } from '../typography'


function Artist ({ id, name, image, genres, popularity, spotify_url }) {
  return (
    <Link to={`/${id}/albums`}>
      <div style={style.artistContainer}>
        <img style={style.img} src={image} alt={name}/>
        <div style={style.overlayView}>
          <Body color="white">{name}</Body>
        </div>
      </div>
    </Link>
  )
}

const style = {
  artistContainer: {
    height: 150,
    width: 150,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  overlayView: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 150,
    width: 150,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: '100%',
    width: '100%'
  }
}

Artist.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  genres: PropTypes.string,
  popularity: PropTypes.string,
  spotify_url: PropTypes.string
}

export default Artist