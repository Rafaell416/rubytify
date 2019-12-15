import React from 'react'
import PropTypes from 'prop-types'
import Button from '../common/buttons/Button'

function Genre ({ name, slug }) {
  return (
    <Button link to={`/genres/${slug}/random_song?genre=${name}`}>
      {name}
    </Button>
  )
}

Genre.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string
}

export default Genre