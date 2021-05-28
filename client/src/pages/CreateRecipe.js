import React, { Component } from 'react'
import ApiClient from '../Globals'

class CreateRecipe extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      cuisine: '',
      image: '',
      ingredients: '',
      instructions: '',
      time: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newRecipe = await ApiClient.post(`/recipes`, this.state)
    } catch (error) {
      throw error
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
          placeholder="description"
        />
        <input
          type="text"
          value={this.state.cuisine}
          onChange={this.handleChange}
          name="cuisine"
          placeholder="cuisine"
        />
        <input
          type="text"
          value={this.state.image}
          onChange={this.handleChange}
          name="image"
          placeholder="image"
        />
        <input
          type="text-area"
          value={this.state.ingredients}
          onChange={this.handleChange}
          name="ingredients"
          placeholder="ingredients"
        />
        <input
          type="text-area"
          value={this.state.instructions}
          onChange={this.handleChange}
          name="instructions"
          placeholder="instructions"
        />
        <input
          type="number"
          value={this.state.time}
          onChange={this.handleChange}
          name="time"
          placeholder="cook time in minutes"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CreateRecipe

// name: ''
//     description: ''
//     cuisine: ''
//     image: ''
//     ingredients: ''
//     time: ''
