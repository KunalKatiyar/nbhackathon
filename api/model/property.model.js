const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  accurate_location: {
    type: Boolean,
    required: true,
  },
  activate_later: {
    type: Boolean,
    required: true,
  },
  activation_by: {
    type: String,
    required: true,
  },
  activation_date: {
    type: Date,
    required: true,
  },
  activation_date_partitioned: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
  available_from: {
    type: Date,
    required: true,
  },
  base_type: {
    type: String,
    required: true,
  },
  bathroom: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    required: true,
  },
  event_time: {
    type: String,
    required: true,
  },
  facing: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  furnishing: {
    type: String,
    required: true,
  },
  gym: {
    type: Boolean,
    required: true,
  },
  last_update_date: {
    type: Date,
    required: true,
  },
  last_updated_by: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  lift: {
    type: Boolean,
    required: true,
  },
  listing_score: {
    type: Number,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  locality_id: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  nb_locality: {
    type: String,
    required: true,
  },
  negotiable: {
    type: Boolean,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  power_backup: {
    type: String,
    required: true,
  },
  property_age: {
    type: Number,
    required: true,
  },
  property_size: {
    type: Number,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
  },
  society: {
    type: String,
    required: true,
  },
  sponsored: {
    type: Boolean,
    required: true,
  },
  starship_offset: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  swimming_pool: {
    type: Boolean,
    required: true,
  },
  total_floor: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  water_supply: {
    type: String,
    required: true,
  },
  photo_urls: {
    type: Object,
  },
  "property_resale.event_time": {
    type: String,
    required: true,
  },
  "property_resale.flooring": {
    type: String,
    required: true,
  },
  "property_resale.kitchen": {
    type: String,
    required: true,
  },
  "property_resale.ownership_type": {
    type: String,
    required: true,
  },
  "price": {
    type: Number,
    required: true,
  },
  "property_resale.property_id": {
    type: String,
    required: true,
  },
  "property_resale.reg_cost_included": {
    type: Boolean,
    required: true,
  },
  "property_resale.servant_room": {
    type: Number,
    required: true,
  },
  "property_resale.starship_offset": {
    type: String,
    required: true,
  },
  "property_resale.type": {
    type: String,
    required: true,
  },
  "property_resale.under_loan": {
    type: Boolean,
    required: true,
  },
  "property_resale.verified": {
    type: Boolean,
    required: true,
  },
}, {collection: "property"}
);

const Property = mongoose.model("property", propertySchema);

module.exports = {
  Property,
};
