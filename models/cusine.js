const { Schema } = require('mongoose')

const Cusine = new Schema(
  {
    title: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = Cusine
