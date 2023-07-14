const {RMRent} = require("../model/avgRent.model");
const { connect, disconnect } = require('../config/db.config');
const logger = require('../logger/api.logger');

class RMRentRepository {
  constructor() {
    connect();
  }

  async getByLocalityAndType(nb_locality, type) {
    try {
      const rmRent = await RMRent.findOne({ nb_locality, type });
      return rmRent.rentometer__actual_rent;
    } catch (err) {
      logger.error("Error::" + err);
    }
  }
}

module.exports = new RMRentRepository();
