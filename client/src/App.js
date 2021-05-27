import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Recipes from './pages/Recipes'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/recipes" component={Recipes} />
        </Switch>
      </div>
    )
  }
}

export default App
