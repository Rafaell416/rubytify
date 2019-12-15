import { fetchGenres, fetchRandomSongByGenre } from '../../api/genres'

const initialState = {
  genres: [],
  currentSong: {}
}

const FETCH_GENRES = 'FETCH_GENRES'
const FETCH_RANDOM_SONG_BY_GENRE = 'FETCH_RANDOM_SONG_BY_GENRE'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.data
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

function getGenres (settings) {
  return dispatch => {
    fetchGenres(settings)
    .then(res => dispatch({
      type: FETCH_GENRES,
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
  getGenres,
  getRandomSongByGenre
}