const {RMRent} = require("../model/avgRent.model");
const {Property} = require("../model/property.model");
const { connect, disconnect } = require('../config/db.config');
const logger = require('../logger/api.logger');

class RMRentRepository {
  constructor() {
    connect();
  }

  async getByLocalityAndType(nb_locality, type) {
    try {
      console.log(nb_locality, type);
      const rmRent = await RMRent.findOne({ nb_locality: nb_locality, type: type });
      console.log(rmRent);
      return rmRent.rentometer__actual_rent;
    } catch (err) {
      logger.error("Error::" + err);
    }
  }
}

module.exports = new RMRentRepository();
