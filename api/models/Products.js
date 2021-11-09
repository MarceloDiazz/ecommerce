const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
  img: {
    type: String,
  },
  category: {
    type: Array,
    required: true,
  },
  location: {
    type: Array,
    required: true,
  },
  rating: {
    type: Array,
    default: [],
  },
  comments: {
    type: Array,
    default: [],
  },
  historial: {
    type: Array,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
