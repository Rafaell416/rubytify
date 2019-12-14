import config from '../../config'

async function fetchArtists () {
  try {
    const endpoint = config.api.endpoints.artists
    const response = await (await fetch(endpoint)).json()
    return response.data
  } catch (error) {
    return error.response
  }
}

export {
  fetchArtists
}