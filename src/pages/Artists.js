import React, { useState, useEffect } from 'react'
import Layout from '../components/common/Layout/Layout'
import { fetchArtists } from '../api/artists'
import { fetchGenres } from '../api/genres'
import ArtistsGrid from '../components/artists/ArtistsGrid'

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
    console.log('genres', genres)
    
  }
  
  return (
    <Layout title="Artists">
      <ArtistsGrid artists={artists}/>
    </Layout>
  )
}

export default Artists