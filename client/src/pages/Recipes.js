import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class Recipes extends Component {
  showRecipe = (recipe) => {
    //console.log(recipe)
    //console.log(recipe._id)
    this.props.history.push(`/recipes/${recipe._id}`)
  }

  render() {
    const { recipes } = this.props

    const recipeLists = recipes.map((recipe, index) => {
      return (
        <RecipeCard
          key={index}
          showRecipe={this.showRecipe}
          selectRecipe={this.props.selectRecipe}
          selectedRecipes={this.props.selectedRecipes}
          recipe={recipe}
        />
      )
    })
    return <div className="recipes">{recipeLists}</div>
  }
}

export default Recipes
