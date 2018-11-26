const mongoose = require('mongoose')
let Schema = mongoose.Schema

//Define the Schema
let schema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 }
})

module.exports = mongoose.model('Item', schema)