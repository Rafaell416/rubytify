import { fetchGenres } from '../../api/genres'

const initialState = {
  genres: []
}

const FETCH_GENRES = 'FETCH_GENRES'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.data
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

export {
  getGenres
}