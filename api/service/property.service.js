const propertyRepository  = require('../repository/property.repository');

class PropertyService {

    constructor() {}

    async getProperties() {
        return await propertyRepository.getProperties();
    }

    async getProperty(propertyId) {
        return await propertyRepository.getProperty(propertyId);
    }
    async createProperty(property) {
        return await propertyRepository.createProperty(property);
    }

    async updateProperty(property) {
        return await propertyRepository.updateProperty(property);
    }

    async deleteProperty(propertyId) {
        return await propertyRepository.deleteProperty(propertyId);
    }

}

module.exports = new PropertyService();