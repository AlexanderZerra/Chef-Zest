const { model } = require('mongoose')
const CusineSchema = require('./cusine')
const RecipeSchema = require('./recipe')

const Cusine = model('cusines', CusineSchema)
const Recipe = model('recipes', RecipeSchema)

module.exports = {
  Cusine,
  Recipe
}
