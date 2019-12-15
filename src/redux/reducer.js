import { combineReducers } from 'redux'
import artists from './modules/artists'
import genres from './modules/genres'
import albums from './modules/albums'
import songs from './modules/songs'

export default combineReducers({
  artists,
  genres,
  albums,
  songs
})