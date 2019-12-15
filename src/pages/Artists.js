import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/common/Layout/Layout'
import ArtistsGrid from '../components/artists/ArtistsGrid'
import GenresList from '../components/genres/GenresList'
import Header from '../components/common/Header'
import { getArtists } from '../redux/modules/artists'
import { getGenres } from '../redux/modules/genres'

function Artists () {
  const content = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArtists())
    dispatch(getGenres({ limit: 6, random: true }))
  }, [])
  
  return (
    <Layout title="Rubytify">
      <Header title="Popular genres" size="medium" left/>
      <GenresList genres={content.genres.genres} horizontal/>
      <Header title="Best artists" size="medium" left/>
      <ArtistsGrid artists={content.artists.artists}/>
    </Layout>
  )
}

export default Artists