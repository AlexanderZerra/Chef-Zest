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
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params
    await Recipe.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, recipe) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!plant) {
          res.status(500).send('Recipe not found!')
        }
        return res.status(200).json(recipe)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({
      recipe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllCuisines,
  getAllRecipes,
  getRecipeById,
  getCuisineById,
  updateRecipe,
  createRecipe
}
