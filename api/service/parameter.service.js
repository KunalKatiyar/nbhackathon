const parameterRepository = require("../repository/parameter.repository");

class ParameterService {
  constructor() {}

  async getParameters() {
    return await parameterRepository.getParameters();
  }

  async getParameter(propertyId) {
    return await parameterRepository.getParameter(propertyId);
  }

  async createParameter(parameter) {
    console.log(parameter);
    return await parameterRepository.createParameter(parameter);
  }
  async updateParameter(parameter, propertyId) {
    return await parameterRepository.updateParameter(parameter,propertyId);
  }

  async deleteParameter(propertyId) {
    return await parameterRepository.deleteParameter(propertyId);
  }
}

module.exports = new ParameterService();
