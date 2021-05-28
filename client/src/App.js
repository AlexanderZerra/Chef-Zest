import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { BASE_URL } from './Globals'

import axios from 'axios'

import Welcome from './pages/Welcome'
import Recipes from './pages/Recipes'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      cuisines: [],
      selectedRecipes: null,
      recipeDetails: null
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/api/recipes`)
    this.setState({ recipes: res.data.results })
  }

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
