import { combineReducers } from 'redux'
import artists from './modules/artists'
import genres from './modules/genres'
import albums from './modules/albums'

export default combineReducers({
  artists,
  genres,
  albums
})