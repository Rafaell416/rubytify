import config from '../../config'

async function fetchAlbums (id) {
  try {
    const endpoint = `${config.api.endpints.artists}/${id}/albums`
    const response = await (await fetch(endpoint)).json()
    return response.data
  } catch (error) {
    return error.response
  }
}

export {
  fetchAlbums
}