const { model } = require('mongoose')
const RecipeSchema = require('./recipe')

const Recipe = model('recipes', RecipeSchema)

module.exports = {
  Recipe
}
