const { Recipe, Cusine } = require('../models/index')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    return res.status(200).json({ recipes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAllCusines = async (req, res) => {
  try {
    const cusines = await Cusine.find()
    return res.status(200).json({ cusines })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCusines,
  getAllRecipes
}
