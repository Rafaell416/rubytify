import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../hooks'
import Layout from '../components/common/Layout/Layout'
import { useParams } from 'react-router-dom'
import SongsList from '../components/songs/SongsList'
import Header from '../components/common/Header'
import { getSongs } from '../redux/modules/songs'


function Songs () {
  const dispatch = useDispatch()
  const content = useSelector(state => state)
  const { id } = useParams()
  const query = useQuery()

  useEffect(() => {
    dispatch(getSongs(id))
  }, [])

  console.log(content.songs.songs)

  return (
    <Layout>
      <Header title={`${query.get('album')} / Songs`} left size="medium"/>
      <SongsList songs={content.songs.songs}/>
    </Layout>
  )
}

export default Songs