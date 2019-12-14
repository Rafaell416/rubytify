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
    const data = parseResponse(response)
    const limit = settings.limit || data.length
    return data.slice(0, limit)
  } catch (error) {
    return error.response
  }
}

export {
  fetchGenres
}