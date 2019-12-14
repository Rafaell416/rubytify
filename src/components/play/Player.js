import React from 'react'
import PropTypes from 'prop-types'
import { Heading2, Body } from '../typography' 
import Button from '../common/buttons/Button'

function Player ({ song: { name, preview_url, spotify_url } }) {
  return (
    <div style={style.container}>
      <Heading2>{name}</Heading2>
      { preview_url 
        ? <video style={{ outline: 'none' }} controls autoPlay name="media">
            <source src={preview_url} type="audio/mpeg"/>
          </video>
        : <Body>Loading...</Body>
      }
      <div style={style.buttonContainer}>
        <Button outline>
          <a href={spotify_url} target="_blank" style={style.a}>Play on Spotify</a>
        </Button>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  preview_url: PropTypes.string,
  spotify_url: PropTypes.string
}

const style = {
  container: {
    display: 'flex',
    padding: 50,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  a: {
    color: 'white'
  },
  buttonContainer: {
    marginTop: 20
  }
}

export default Player