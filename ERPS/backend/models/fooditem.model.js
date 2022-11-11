const mongoose = require('mongoose');
//model 
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model('FoodItem', foodSchema);