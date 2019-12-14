import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchAlbums } from '../api/albums'
import AlbumsGrid from '../components/albums/AlbumsGrid/AlbumsGrid'
import { useParams } from 'react-router-dom'

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
    <Layout title="Albums">
      <AlbumsGrid albums={albums}/>
    </Layout>
  )
}

export default Albums