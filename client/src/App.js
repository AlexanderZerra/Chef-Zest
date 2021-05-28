import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ApiClient from './Globals'
import NewRecipes from './pages/NewRecipes'
import RecipeDetails from './pages/RecipeDetails'

import Welcome from './pages/Welcome'
import Recipes from './pages/Recipes'

import Nav from './components/Nav'

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
  selectRecipe = (recipe) => {
    console.log('hi')
    console.log(recipe)
    this.setState({ selectedRecipes: recipe })
  }
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/createNew" component={NewRecipes} />
          <Route
            exact
            path="/recipes"
            component={(props) => (
              <Recipes
                {...props}
                recipes={this.state.recipes}
                selectedRecipes={this.state.selectedRecipes}
                selectRecipe={this.selectRecipe}
              />
            )}
          />
          <Route
            exact
            path="/recipes/:id"
            component={(props) => (
              <RecipeDetails
                {...props}
                selectedRecipes={this.state.selectedRecipes}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
