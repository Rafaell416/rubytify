import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchArtists } from '../api/artists'
import ArtistsGrid from '../components/artists/ArtistsGrid/ArtistsGrid'

function Artists () {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    getArtists()
  }, [])

  const getArtists = async () => {
    const artists = await fetchArtists()
    setArtists(artists)
  }
  
  return (
    <Layout title="Artists">
      <ArtistsGrid artists={artists}/>
    </Layout>
  )
}

export default Artists