const mongoose = require('mongoose');

const { typeDefs } = require('../schema');

const restaurantSchema = new mongoose.Schema({
  restaurant_id: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: {
    building: { type: String },
    street: { type: String, required: true },
    zipcode: { type: String },
  },
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;