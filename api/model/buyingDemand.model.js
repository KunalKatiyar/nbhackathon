const mongoose = require('mongoose');

const buyerDemandSchema = new mongoose.Schema({
  nb_locality: {
    type: String,
    required: true
  },
  close_time: {
    type: Number,
    required: true
  }
},
{ collection: "loc_wise_avg_closing_time_resale" });

const BuyerDemand = mongoose.model('BuyerDemand', buyerDemandSchema);

module.exports = {
    BuyerDemand,
  };
