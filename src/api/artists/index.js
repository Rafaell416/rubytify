import config from '../../config'

async function fetchArtists () {
  try {
    const endpoint = config.api.endpints.artists
    const response = await (await fetch(endpoint)).json()
    return response.data
  } catch (error) {
    return error.response
  }
}

export {
  fetchArtists
}