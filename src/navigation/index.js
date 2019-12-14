import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Artists from '../pages/Artists'
import Albums from '../pages/Albums'
import Songs from '../pages/Songs'

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
      </Switch>
    </Router>
  )
}

export default Navigation