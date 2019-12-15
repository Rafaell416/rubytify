import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/common/Layout/Layout'
import { fetchGenres } from '../api/genres'
import ArtistsGrid from '../components/artists/ArtistsGrid'
import GenresList from '../components/genres/GenresList'
import Header from '../components/common/Header'
import { getArtists } from '../redux/modules/artists'

function Artists () {
  const content = useSelector(state => state)
  const dispatch = useDispatch()

  const [genres, setGenres] = useState([])

  useEffect(() => {
    dispatch(getArtists())
    getGenres()
  }, [])

  const getGenres = async () => {
    const genres = await fetchGenres({ limit: 6, random: true })
    setGenres(genres)
  }

  console.log('content', content)
  
  return (
    <Layout title="Rubytify">
      <Header title="Popular genres" size="medium" left/>
      <GenresList genres={genres} horizontal/>
      <Header title="Best artists" size="medium" left/>
      <ArtistsGrid artists={content.artists.artists}/>
    </Layout>
  )
}

export default Artists