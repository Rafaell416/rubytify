import React from 'react'
import PropTypes from 'prop-types'
import Genre from './Genre'
import { colors } from '../../styles'
import Button from '../common/buttons/Button'
import GenreLoader from '../common/loaders/GenreLoader'

function GenresList ({ genres, horizontal }) {
  if ( horizontal ) {
    if ( genres.length == 0 ) {
      return (
        <GenreLoader />
      )
    } else {
      return (
        <div style={ style.genresListContainerHorizontal}>
          {genres.map(genre => <Genre key={genre.slug} {...genre}/>)}
          <Button link to="/genres" outline>>></Button>
        </div>
      )
    }
  } else {
    return (
      <div style={style.genresListContainerGrid}>
        {genres.map(genre => <Genre key={genre.slug} {...genre}/>)}
      </div>
    )
  }
}

const style = {
  genresListContainerHorizontal: {
    backgroundColor: colors.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  genresListContainerGrid: {
    padding: 20,
    backgroundColor: colors.dark,
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gridAutoRows: 'minmax(50px, auto)'
  }
}

GenresList.propTypes = {
  genres: PropTypes.array,
  horizontal: PropTypes.bool
}

GenresList.defaultProps = {
  horizontal: true
}

export default GenresList