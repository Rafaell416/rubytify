import config from '../../config'

String.prototype.capitalize = function () {
  return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase() })
}

function parseResponse (response) {
  const data = response.data.map(i => {
    const name = i.replace('_', ' ')
    return { slug: i, name: name.capitalize() }
  })
  return data
}

async function fetchGenres (settings) {
  try {
    const endpoint = config.api.endpoints.genres
    const response = await (await fetch(endpoint)).json()
    let data = parseResponse(response)
    const limit = settings.limit || data.length
    const random = settings.random || false
    if ( random ) {
      data.sort(() => .5 - Math.random())
    }
    return data.slice(0, limit)
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
  fetchGenres,
  fetchRandomSongByGenre
}