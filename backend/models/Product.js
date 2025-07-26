const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  sku: { type: String, required: true, unique: true },
  description: { type: String },
  image_url: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);