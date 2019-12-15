import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/common/Layout/Layout'
import Player from '../components/play/Player'

function Song () {
  const content = useSelector(state => state)
  return (
    <Layout>
      <Player song={content.songs.currentSong}/>
    </Layout>
  )
}

export default Song