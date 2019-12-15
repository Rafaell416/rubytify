import { fetchArtists } from '../../api/artists'

const initialState = {
  artists: []
}

const FETCH_ARTISTS = 'FETCH_ARTISTS'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTISTS:
      return {
        ...state,
        artists: action.data
      } 
    default:
      return state
  }
}

function getArtists () {
  return dispatch => {
    fetchArtists()
    .then(res => dispatch({
      type: FETCH_ARTISTS,
      data: res
    }))
  }
} 

export {
  getArtists
}