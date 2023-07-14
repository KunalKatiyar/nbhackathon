const { connect, disconnect } = require('../config/db.config');
const {Property } = require('../model/property.model');
const logger = require('../logger/api.logger');

class PropertyRepository {

    constructor() {
        connect();
    }

    async getProperties() {
        const properties = await Property.find({});
        console.log('properties:::', properties);
        return properties;
    }

    async getProperty(propertyId) {
        const property = await Property.findOne({ id: propertyId });
        console.log('property:::', property);
        return property;
    }

    async createProperty(property) {
        let data = {};
        try {
            data = await Property.create(property);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateProperty(property) {
        let data = {};
        try {
            data = await Property.updateOne(property);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteProperty(propertyId) {
        let data = {};
        try {
            data = await Property.deleteOne({id : propertyId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new PropertyRepository();