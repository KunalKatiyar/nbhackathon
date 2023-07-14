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
        return await propertyRepository.createProperty(Property);
    }

    async updateProperty(property) {
        return await propertyRepository.updateProperty(Property);
    }

    async deleteProperty(propertyId) {
        return await propertyRepository.deleteProperty(PropertyId);
    }

}

module.exports = new PropertyService();