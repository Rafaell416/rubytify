const host = 'https://rubytify.herokuapp.com/api/v1'

const config = {
  api: {
    endpints: {
      artists: `${host}/artists`,
      genres: `${host}/genres`,
      albums: `${host}/albums`
    }
  }
}

export default config