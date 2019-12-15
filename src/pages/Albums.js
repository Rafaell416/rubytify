import React, { useState, useEffect } from 'react'
import Layout from '../components/common/Layout/Layout'
import { fetchAlbums } from '../api/albums'
import AlbumsGrid from '../components/albums/AlbumsGrid'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header'

function Albums () {
  const [albums, setAlbums] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getAlbums()
  }, [])

  const getAlbums = async () => {
    const albums = await fetchAlbums(id)
    setAlbums(albums)
  }
  return (
    <Layout>
      <Header title="Albums" size="medium" left/>
      <AlbumsGrid albums={albums}/>
    </Layout>
  )
}

export default Albums