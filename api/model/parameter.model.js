const mongoose = require("mongoose");

const paramSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
    demand: {
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
  },
  { collection: "Parameter" }
);

const Parameter = mongoose.model("Parameter", paramSchema);

module.exports = {
  Parameter,
};
