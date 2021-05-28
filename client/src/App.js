import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ApiClient from './Globals'
import CreateRecipe from './pages/CreateRecipe'
import NewRecipes from './pages/NewRecipes'

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
    const res = await ApiClient.get('/recipes')
    console.log(res)
    this.setState({ recipes: res.data.recipes })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/recipes" component={Recipes} /> */}
          <Route exact path="/new" component={CreateRecipe} />
          <Route exact path="/createNew" component={NewRecipes} />
          <Route
            exact
            path="/recipes"
            component={(props) => (
              <Recipes {...props} recipes={this.state.recipes} />
            )}
          />
        </Switch>
        {/* <Recipes recipes={this.state.recipes} /> */}
        {/* <CreateRecipe /> */}
      </div>
    )
  }
}

export default App
