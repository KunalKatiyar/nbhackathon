const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
  nb_locality: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  rentometer__actual_rent: {
    type: Number,
    required: true
  }
},
{ collection: "loc_bhk_wise_avg_rent" });

const RMRent = mongoose.model('RMRent', rentSchema);
module.exports = {
    RMRent,
  };