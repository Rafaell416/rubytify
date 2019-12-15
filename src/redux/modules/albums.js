import { fetchAlbums } from '../../api/albums'

const initialState = {
  albums: []
}

const FETCH_ALBUMS = 'FETCH_ALBUMS'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.data
      } 
    default:
      return state
  }
}

function getAlbums (id) {
  return dispatch => {
    fetchAlbums(id)
    .then(res => dispatch({
      type: FETCH_ALBUMS,
      data: res
    }))
  }
} 

export {
  getAlbums
}