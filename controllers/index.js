const { Recipe, Cuisine } = require('../models/index')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    return res.status(200).json({ recipes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAllCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find()
    return res.status(200).json({ cuisines })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (recipe) {
      return res.status(200).json({ recipe })
    }
    return res.status(404).send('Recipe with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getCuisineById = async (req, res) => {
  try {
    const { id } = req.params
    const cuisine = await Cuisine.findById(id)
    if (cuisine) {
      return res.status(200).json({ cuisine })
    }
    return res.status(404).send('Cuisine with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCuisines,
  getAllRecipes,
  getRecipeById,
  getCuisineById
}
