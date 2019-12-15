import React, { useState, useEffect } from 'react'
import Layout from '../components/common/Layout/Layout'
import { fetchSongs } from '../api/songs'
import { useParams } from 'react-router-dom'
import SongsList from '../components/songs/SongsList'
import Header from '../components/common/Header'


function Songs () {
  const [songs, setSongs] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getSongs()
  }, [])

  const getSongs = async () => {
    const songs = await fetchSongs(id)
    setSongs(songs)
  }
  return (
    <Layout>
      <Header title="Songs" left size="medium"/>
      <SongsList songs={songs}/>
    </Layout>
  )
}

export default Songs