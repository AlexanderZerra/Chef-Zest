import React, { Component } from 'react'

class RecipeCard extends Component {
  render() {
    const { recipe } = this.props
    return (
      <div className="recipe-card" onClick={() => this.props.showCard(recipe)}>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <h3>{recipe.cuisine}</h3>
        <h4>{recipe.description}</h4>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
        <p>{recipe.time}</p>
        <h3>spaghetti</h3>

        <p>20min</p>
      </div>
    )
  }
}
export default RecipeCard
