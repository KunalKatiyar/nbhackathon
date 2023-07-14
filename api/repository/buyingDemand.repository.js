const {BuyerDemand} = require("../model/buyingDemand.model");
const { connect, disconnect } = require('../config/db.config');
const logger = require('../logger/api.logger');

class BuyerDemandRepository {
  constructor() {
    connect();
  }

  async getByLocality(nb_locality) {
    try {
      const buyerDemand = await BuyerDemand.findOne({ nb_locality });
      return buyerDemand.close_time;
    } catch (error) {
      logger.error("Error::" + err);
    }
  }
}

module.exports = new BuyerDemandRepository();
