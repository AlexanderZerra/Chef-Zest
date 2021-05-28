import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class Recipes extends Component {
  showRecipe = (recipe) => {
    this.props.history.push(`/recipes/${recipe.id}`)
  }

  render() {
    const { recipes } = this.props
    // return (
    //   <div className="this"
    //     {recipes.map((recipe)=>
    //     <div key={recipe.id} className="card">
    //       <img src={recipe.images}/>

    const recipeLists = recipes.map((recipe, index) => {
      return (
        <RecipeCard key={index} showRecipe={this.showRecipe} recipe={recipe} />
      )
    })
    return <div className="recipes">{recipeLists}</div>
  }
}

export default Recipes
