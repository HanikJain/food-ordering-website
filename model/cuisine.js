const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
    cuisine: Array
  });
  

const CuisineModel = mongoose.model('cuisine', cuisineSchema);  
module.exports = CuisineModel;