import { combineReducers } from 'redux'
import artists from './modules/artists'
import genres from './modules/genres'

export default combineReducers({
  artists,
  genres
})