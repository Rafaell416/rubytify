import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Layout from '../components/common/Layout/Layout'
import { fetchRandomSongByGenre } from '../api/genres'
import Player from '../components/play/Player'

function Play () {
  const [randomSong, setRandomSong] = useState({})
  const { genre_name } = useParams() 

  useEffect(() => {
    getRandomSong()
  }, [])

  const getRandomSong = async () => {
    const song = await fetchRandomSongByGenre(genre_name)
    setRandomSong(song)
  }

  return (
    <Layout title="Random Song">
      <Player song={randomSong}/>
    </Layout>
  )
}

Play.propTypes = {

}

export default Play