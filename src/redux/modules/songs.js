import { fetchSongs } from '../../api/songs'

const initialState = {
  songs: [],
}

const FETCH_SONGS = 'FETCH_SONGS'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.data
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

export {
  getSongs
}