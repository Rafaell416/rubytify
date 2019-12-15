import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Artists from '../pages/Artists'
import Albums from '../pages/Albums'
import Songs from '../pages/Songs'
import Genres from '../pages/Genres'
import RandomSong from '../pages/RandomSong'
import Song from '../pages/Song'

function Navigation () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Artists />
        </Route>
        <Route exact path="/:id/albums">
          <Albums />
        </Route>
        <Route exact path="/albums/:id/songs">
          <Songs />
        </Route>
        <Route exact path="/genres">
          <Genres />
        </Route>
        <Route exact path="/genres/:genre_name/random_song">
          <RandomSong />
        </Route>
        <Route exact path="/song">
          <Song />
        </Route>
      </Switch>
    </Router>
  )
}

export default Navigation