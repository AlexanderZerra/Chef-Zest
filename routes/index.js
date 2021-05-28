const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/recipes', controllers.createRecipe)
router.get('/recipes', controllers.getAllRecipes)
router.get('/recipes/:id', controllers.getRecipeById)
router.put('/recipes/:id', controllers.updateRecipe)

module.exports = router
