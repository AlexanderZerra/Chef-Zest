const { Schema } = require('mongoose')

const Cuisine = new Schema(
  {
    title: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = Cuisine
