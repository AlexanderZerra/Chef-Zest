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
    return (
      <div>
        <h2>hello</h2>
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <h3>{recipe.cuisine}</h3>
        <h4>{recipe.description}</h4>
        <p>Total Time: {recipe.time} minutes</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
    )
  }
}
