const mongoose = require('mongoose');

const rentDemandSchema = new mongoose.Schema({
  nb_locality: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  close_time: {
    type: Number,
    required: true
  }
},
{ collection: "loc_bhk_wise_avg_close_time_rent" }
);

const RentDemand = mongoose.model('loc_bhk_wise_avg_close_time_rent', rentDemandSchema);

module.exports = {
  RentDemand,
};