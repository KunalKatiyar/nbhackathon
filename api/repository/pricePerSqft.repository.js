const {SQFTRate} = require("../model/pricePerSqft.model");
const { connect, disconnect } = require('../config/db.config');
const logger = require('../logger/api.logger');

class SQFTRateRepository {
  constructor() {
    connect();
  }

  async getByLocality(nb_locality) {
    try {
      const sqftRate = await SQFTRate.findOne({ nb_locality });
      return sqftRate.price_per_sqft;
    } catch (err) {
      logger.error("Error::" + err);
    }
  }
}

module.exports = new SQFTRateRepository();
