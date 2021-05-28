import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'
import ApiClient from '../Globals'

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: this.props.recipes
    }
  }
  async componentDidMount() {
    const res = await ApiClient.get('/recipes')
    console.log(res)
    this.setState({ recipes: res.data.recipes })
  }
  showRecipe = (recipe) => {
    //console.log(recipe)
    //console.log(recipe._id)
    this.props.history.push(`/recipes/${recipe._id}`)
  }

  render() {
    //const { recipes } = this.props

    const recipeLists = this.state.recipes.map((recipe, index) => {
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
