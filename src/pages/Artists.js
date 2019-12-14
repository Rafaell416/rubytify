import React, { useState, useEffect } from 'react'
import Layout from '../components/common/Layout/Layout'
import { fetchArtists } from '../api/artists'
import { fetchGenres } from '../api/genres'
import ArtistsGrid from '../components/artists/ArtistsGrid'
import GenresList from '../components/genres/GenresList'
import Header from '../components/common/Header'

function Artists () {
  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    getArtists()
    getGenres()
  }, [])

  const getArtists = async () => {
    const artists = await fetchArtists()
    setArtists(artists)
  }

  const getGenres = async () => {
    const genres = await fetchGenres({ limit: 6, random: true })
    setGenres(genres)
  }
  
  return (
    <Layout title="Rubytify">
      <Header title="Popular genres" size="medium" left/>
      <GenresList genres={genres} horizontal/>
      <Header title="Best artists" size="medium" left/>
      <ArtistsGrid artists={artists}/>
    </Layout>
  )
}

export default Artists