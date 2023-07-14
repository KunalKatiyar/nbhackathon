const parameterService  = require('../service/parameter.service');
const logger = require('../logger/api.logger');

class ParamController {

    async createParameter(param) {
        logger.info('Controller: createparam', param);
        return await parameterService.createParameter(param);
    }
    async getParameters() {
        logger.info('Controller: getParameters')
        return await parameterService.getParameters();
    }

    async getParameter(propertyId) {
        logger.info('Controller: getParameter')
        return await parameterService.getParameter(propertyId);
    }

    async updateParameter(parameter,propertyId) {
        logger.info('Controller: updateparameter', propertyId);
        return await parameterService.updateParameter(parameter,propertyId);
    }

    async deleteParameter(propertyId) {
        logger.info('Controller: deleteparameter', propertyId);
        return await parameterService.deleteParameter(propertyId);
    }
}
module.exports = new ParamController();