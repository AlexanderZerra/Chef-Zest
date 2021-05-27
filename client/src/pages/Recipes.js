import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class Recipes extends Component {
  render() {
    return (
      <div>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    )
  }
}
export default Recipes
