import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../components/common/Layout/Layout'
import Player from '../components/play/Player'
import { getRandomSongByGenre } from '../redux/modules/genres'

function Play () {
  const content = useSelector(state => state)
  const dispatch = useDispatch()
  const { genre_name } = useParams() 

  useEffect(() => {
    dispatch(getRandomSongByGenre(genre_name))
  }, [])

  return (
    <Layout title="Random Song">
      <Player song={content.genres.currentSong}/>
    </Layout>
  )
}

export default Play