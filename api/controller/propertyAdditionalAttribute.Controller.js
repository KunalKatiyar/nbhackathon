const parameterService  = require('../service/parameter.service');
const logger = require('../logger/api.logger');

class ParamController {

    async createParameter(param) {
        logger.info('ParamController: createparam', param);
        return await parameterService.createParameter(param);
    }
    async getParameters() {
        logger.info('ParamController: getParameters')
        return await parameterService.getParameters();
    }

    async getParameter(propertyId) {
        logger.info('ParamController: getParameter')
        return await parameterService.getParameter(propertyId);
    }

    async getSortedProperties(price) {
        logger.info('ParamController: getParameter')
        return await parameterService.getSortedProperties(price);
    }

    async updateParameter(parameter,propertyId) {
        logger.info('ParamController: updateparameter', propertyId);
        return await parameterService.updateParameter(parameter,propertyId);
    }

    async deleteParameter(propertyId) {
        logger.info('ParamController: deleteparameter', propertyId);
        return await parameterService.deleteParameter(propertyId);
    }

    async saveRoiScore(propertyId) {
        logger.info('ParamController: deleteparameter', propertyId);
        return await parameterService.getRoiScore(propertyId);
    }

    async saveParameters() {
        return await parameterService.saveParameters();
    }

}
module.exports = new ParamController();