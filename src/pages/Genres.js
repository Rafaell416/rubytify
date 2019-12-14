import React, { useState, useEffect } from 'react'
import Layout from '../components/common/Layout/Layout'
import { fetchGenres } from '../api/genres'
import GenresList from '../components/genres/GenresList'

function Genres () {
  const [genres, setGenres] = useState([])
  useEffect(() => {
    getGenres()
  }, [])

  const getGenres = async () => {
    const genres = await fetchGenres({})
    setGenres(genres)
  }

  return (
    <Layout title="Genres">
      <GenresList genres={genres} horizontal={false}/>
    </Layout>
  )
}

export default Genres