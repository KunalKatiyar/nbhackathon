const mongoose = require("mongoose");

const paramSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
    },
    price: {
      type: Number,
      required: true,
    },
    rental_yield: {
      type: Number,
      required: true,
    },
    yoy_growth: {
      type: Number,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    rental_demand: {
      type: String,
      required: true,
    },
    buying_demand: {
        type: String,
        required: true,
      },
    sqft: {
      type: Number,
      required: true,
    },
    value_for_money: {
      type: Number,
      required: true,
    },
    roi: {
      type: Number,
      required: true,
    },
    redirect_url: {
        type: String,
        required: true,
    }
  },
  { collection: "Parameter" }
);

const Parameter = mongoose.model("Parameter", paramSchema);

module.exports = {
  Parameter,
};
