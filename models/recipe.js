const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cuisine: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    time: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Recipe
