const mongoose = require('mongoose');

const sqftRateSchema = new mongoose.Schema({
  nb_locality: {
    type: String,
    required: true
  },
  price_per_sqft: {
    type: Number,
    required: true
  }
},
{ collection: "loc_average_price_per_sqft_resale" });

const SQFTRate = mongoose.model('SQFTRate', sqftRateSchema);

module.exports = {
    SQFTRate,
  };