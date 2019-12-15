import { fetchSongs, fetchRandomSongByGenre } from '../../api/songs'

const initialState = {
  songs: [],
  currentSong: {}
}

const FETCH_SONGS = 'FETCH_SONGS'
const FETCH_RANDOM_SONG_BY_GENRE = 'FETCH_RANDOM_SONG_BY_GENRE'

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

export {
  getSongs,
  getRandomSongByGenre
}