import { fetchSongs, fetchRandomSongByGenre } from '../../api/songs'

const initialState = {
  songs: [],
  currentSong: {}
}

const FETCH_SONGS = 'FETCH_SONGS'
const FETCH_RANDOM_SONG_BY_GENRE = 'FETCH_RANDOM_SONG_BY_GENRE'
const SET_CURRENT_SONG = 'SET_CURRENT_SONG'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.data
      }
    case FETCH_RANDOM_SONG_BY_GENRE:
      return {
        ...state,
        currentSong: action.data
      }
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data
      }
    default:
      return state
  }
}

function getSongs (id) {
  return dispatch => {
    fetchSongs(id)
    .then(res => dispatch({
      type: FETCH_SONGS,
      data: res
    }))
  }
} 

function getRandomSongByGenre (genre) {
  return dispatch => {
    fetchRandomSongByGenre(genre)
    .then(res => dispatch({
      type: FETCH_RANDOM_SONG_BY_GENRE,
      data: res
    }))
  }
}

function setCurrentSong (currentSong) {
  return dispatch => dispatch({
    type: SET_CURRENT_SONG,
    data: currentSong
  })
}

export {
  getSongs,
  setCurrentSong,
  getRandomSongByGenre
}