import React, { Component } from 'react'

export default class RecipeDetails extends Component {
  render() {
    const recipe = this.props.selectedRecipes
    console.log('in details')
    console.log(recipe)
    return recipe ? (
      <div>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <h3>{recipe.cuisine}</h3>
        <h4>{recipe.description}</h4>
        <p>Total Time: {recipe.time} minutes</p>
        <p>hi</p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
    ) : null
  }
}
