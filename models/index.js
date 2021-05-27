const { model } = require('mongoose')
const CuisineSchema = require('./cuisine')
const RecipeSchema = require('./recipe')

const Cuisine = model('cuisines', CuisineSchema)
const Recipe = model('recipes', RecipeSchema)

module.exports = {
  Cuisine,
  Recipe
}
