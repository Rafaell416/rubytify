import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/common/Layout/Layout'
import { getAlbums } from '../redux/modules/albums'
import AlbumsGrid from '../components/albums/AlbumsGrid'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header'

function Albums () {
  const content = useSelector(state => state)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getAlbums(id))
  }, [])

  return (
    <Layout>
      <Header title="Albums" size="medium" left/>
      <AlbumsGrid albums={content.albums.albums}/>
    </Layout>
  )
}

export default Albums