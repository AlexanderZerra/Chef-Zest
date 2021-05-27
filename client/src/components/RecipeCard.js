import React, { Component } from 'react'

class RecipeCard extends Component {
  render() {
    return (
      <div>
        <img
          alt="spaghetti"
          src="https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg"
        />
        {/* <h2> {recipe.country}</h2> */}
        <h3>spaghetti</h3>

        <p>20min</p>
      </div>
    )
  }
}
export default RecipeCard
