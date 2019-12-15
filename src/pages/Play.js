import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../hooks'
import { useParams } from 'react-router-dom'
import Layout from '../components/common/Layout/Layout'
import Player from '../components/play/Player'
import Header from '../components/common/Header'
import { getRandomSongByGenre } from '../redux/modules/genres'

function Play () {
  const content = useSelector(state => state)
  const dispatch = useDispatch()
  const { genre_name } = useParams() 
  const query = useQuery()

  useEffect(() => {
    dispatch(getRandomSongByGenre(genre_name))
  }, [])

  return (
    <Layout>
      <Header title={`Genres / ${query.get('genre')} / Random song`} left size="medium"/>
      <Player song={content.genres.currentSong}/>
    </Layout>
  )
}

export default Play