import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Body } from '../typography'
import { colors } from '../../styles'
import Button from '../common/buttons/Button'
import ListLoader from '../common/loaders/ListLoader'
import { setCurrentSong } from '../../redux/modules/songs'


function SongsList ({ songs }) {
  const dispatch = useDispatch()
  const history = useHistory()

  function setSong (song) {
    dispatch(setCurrentSong(song))
    history.push('/song')
  }

  if (songs.length == 0) return <ListLoader />
  return (
    <ul style={style.ul}>
      {songs.map((song) => {
        const { id, name, spotify_url, preview_url } = song
        return (
          <div key={id} style={style.songContainer}>
            <li>
              <Body color="white">{name}</Body>
            </li>
            <div style={style.buttonsContainer}>
              { preview_url 
                ? <Button outline onClick={() => setSong(song)}>
                    Listen preview
                  </Button> 
                : null }
              <Button>
                <a style={style.a} href={spotify_url} target="_blank" rel="noopener noreferrer">
                  Play on Spotify
                </a>
              </Button>
            </div>
          </div>
        )
      })}
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