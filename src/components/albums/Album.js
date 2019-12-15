import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Body } from '../typography'


function Album ({ id, name, image, spotify_url, total_tracks }) {
  return (
    <Link to={`/albums/${id}/songs?album=${name}`} style={{ textDecoration: 'none' }}>
      <div style={style.albumContainer}>
        <img style={style.img} src={image} alt={name}/>
      </div>
      <div style={style.nameContainer}>
        <Body color="white">{name}</Body>
      </div>
    </Link>
  )
}

const style = {
  albumContainer: {
    height: 150,
    width: 150,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 'auto'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  }
}

Album.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  spotify_url: PropTypes.string,
  total_tracks: PropTypes.number
}

export default Album