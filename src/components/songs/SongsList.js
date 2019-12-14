import React from 'react'
import PropTypes from 'prop-types'
import { Body } from '../typography'
import { colors } from '../../styles'
import Button from '../common/buttons/Button'

function SongsList ({ songs }) {
  return (
    <ul style={style.ul}>
      {songs.map(({ id, name, spotify_url }) => (
        <div key={id} style={style.songContainer}>
          <li>
            <Body color="white">{name}</Body>
          </li>
          <Button>
            <a style={style.a} href={spotify_url} target="_blank" rel="noopener noreferrer">
              Play on Spotify
            </a>
          </Button>
          
        </div>
      ))}
    </ul>
  )
}

const style = {
  ul: {
    padding: 0
  },
  songContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomColor: colors.primary,
    paddingBottom: 8,
    margin: 20
  },
  a: {
    color: colors.white,
    textDecoration: 'none'
  }
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired
}

export default SongsList