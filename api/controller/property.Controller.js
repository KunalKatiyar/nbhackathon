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
        logger.info('Controller: createproperty', task);
        return await propertyService.createProperty(task);
    }

    async updateProperty(property) {
        logger.info('Controller: updateproperty', task);
        return await propertyService.updateProperty(task);
    }

    async deleteProperty(propertyId) {
        logger.info('Controller: deleteproperty', taskId);
        return await propertyService.deleteProperty(taskId);
    }
}
module.exports = new PropertyController();