import React, { Component } from 'react'

class RecipeCard extends Component {
  render() {
    console.log(this.props)
    const { recipe } = this.props

    return (
      <div
        className="recipe-card"
        onClick={() => {
          this.props.selectRecipe(recipe)
          this.props.showRecipe(recipe)
        }}
      >
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <h3>{recipe.cuisine}</h3>
        <h4>{recipe.description}</h4>
        <p>Total Time: {recipe.time} minutes</p>
      </div>
    )
  }
}
export default RecipeCard
