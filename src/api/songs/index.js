import config from '../../config'

async function fetchSongs (id) {
  try {
    const endpoint = `${config.api.endpoints.albums}/${id}/songs`
    const response = await (await fetch(endpoint)).json()
    return response.data
  } catch (error) {
    return error.response
  }
}

async function fetchRandomSongByGenre (genre) {
  try {
    const endpoint = `${config.api.endpoints.genres}/${genre}/random_song`
    const response = await (await fetch(endpoint)).json()
    return response.data
  } catch (error) {
    return error.response
  }
}

export {
  fetchSongs,
  fetchRandomSongByGenre
}