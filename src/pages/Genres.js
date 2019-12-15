import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/common/Layout/Layout'
import { getGenres } from '../redux/modules/genres'
import GenresList from '../components/genres/GenresList'
import Header from '../components/common/Header'

function Genres () {
  const dispatch = useDispatch()
  const content = useSelector(state => state)

  useEffect(() => {
    dispatch(getGenres({}))
  }, [])

  return (
    <Layout>
      <Header title="Genres" left size="medium"/>
      <GenresList genres={content.genres.genres} horizontal={false}/>
    </Layout>
  )
}

export default Genres