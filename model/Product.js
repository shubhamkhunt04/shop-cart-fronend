const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  specialPrice: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
    trim: true,
  },
  sleeve: {
    type: String,
    require: true,
    trim: true,
  },
  fabric: {
    type: String,
    require: true,
    trim: true,
  },
  pattern: {
    type: String,
    require: true,
    trim: true,
  },
  imgUrl: {
    type: String,
    require: true,
    trim: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  size: [
    {
      type: String,
      require: true,
      trim: true,
    },
  ],
  reversible: {
    type: Boolean,
    require: true,
  },
  idealFor: {
    type: String,
    require: true,
    trim: true,
  },
  quantity: {
    type: Number,
    require: true,
    default: 1,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
