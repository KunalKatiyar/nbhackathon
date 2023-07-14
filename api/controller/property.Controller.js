const propertyService  = require('../service/property.service');
const logger = require('../logger/api.logger');

class PropertyController {

    async getProperties() {
        logger.info('Controller: getProperties')
        return await propertyService.getProperties();
    }

    async getProperty(propertyId) {
        logger.info('Controller: getProperty')
        return await propertyService.getProperty(propertyId);
    }

    async createProperty(property) {
        logger.info('Controller: createproperty')
        return await propertyService.createProperty(property);
    }

    async updateProperty(property) {
        logger.info('Controller: updateproperty', property);
        return await propertyService.updateProperty(property);
    }

    async deleteProperty(propertyId) {
        logger.info('Controller: deleteproperty', propertyId);
        return await propertyService.deleteProperty(propertyId);
    }
}
module.exports = new PropertyController();