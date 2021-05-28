import React, { Component } from 'react'

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   let selectedRecipe = this.props.recipe.find(
  //     (recipe) => recipe.id === parseInt(this.props.match.params.id)
  //   )
  //   this.setState({ recipe: selectedRecipe })
  // }

  render() {
    const recipe = this.props.selectedRecipes
    console.log('in details')
    console.log(recipe)
    return recipe ? (
      <div>
        <img src={recipe.image} alt={recipe.name} />
        <h2 className="recipename">{recipe.name}</h2>
        <h3 className="recipecuisine">{recipe.cuisine}</h3>
        <h4 className="recipedescription">{recipe.description}</h4>
        <p className="time">Total Time: {recipe.time} minutes</p>
        <ul className="ingredientlist">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        {/* <p>{recipe.ingredients}</p> */}
        <ul>
          {/* <p className="instructions">{recipe.instructions}</p> */}
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    ) : null
  }
}
