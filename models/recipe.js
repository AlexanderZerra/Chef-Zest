const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cusine: { type: Schema.Types.ObjectId, ref: 'cusines' },
    image: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    time: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Recipe
