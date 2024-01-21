// server/models/price.js
const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const priceModel = mongoose.model('Price', priceSchema);

module.exports = priceModel;