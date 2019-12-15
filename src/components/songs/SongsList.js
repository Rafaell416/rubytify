import React from 'react'
import PropTypes from 'prop-types'
import { Body } from '../typography'
import { colors } from '../../styles'
import Button from '../common/buttons/Button'
import ListLoader from '../common/loaders/ListLoader'

function SongsList ({ songs }) {
  if (songs.length == 0) return <ListLoader />
  return (
    <ul style={style.ul}>
      {songs.map(({ id, name, spotify_url }) => (
        <div key={id} style={style.songContainer}>
          <li>
            <Body color="white">{name}</Body>
          </li>
          <div style={style.buttonsContainer}>
            <Button outline link to="/song">
              Listen preview
            </Button>
            <Button>
              <a style={style.a} href={spotify_url} target="_blank" rel="noopener noreferrer">
                Play on Spotify
              </a>
            </Button>
          </div>
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
  },
  buttonsContainer: {
    display: 'flex'
  }
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired
}

export default SongsList