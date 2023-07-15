const { connect, disconnect } = require('../config/db.config');
const {RentDemand} =  require("../model/rentDemand.model");
const logger = require('../logger/api.logger');

class RentDemandRepository {
  constructor() {
    connect();
  }

  async getByTypeAndLocality(type, nb_locality) {
    try {
      const rentDemand = await RentDemand.findOne({ type: type, nb_locality: nb_locality });
      console.log(rentDemand);
      return rentDemand.close_time;
    } catch (err) {
      logger.error("Error::" + err);
    }
  }
}

module.exports = new RentDemandRepository();
