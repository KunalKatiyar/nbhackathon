const { connect, disconnect } = require('../config/db.config');
const {Parameter } = require('../model/parameter.model');
const logger = require('../logger/api.logger');

class ParameterRepository {

    constructor() {
        connect();
    }

    async getParameters() {
        const parameters = await Parameter.find({});
        console.log('parameters:::', parameters);
        return parameters;
    }

    async getParameter(propertyId) {
    
        try {
            const parameter = await Parameter.findOne({ id: propertyId });
            console.log('parameter:::', parameter);
            return parameter;
        } catch(err) {
            logger.error('Error::' + err);
        }
    }

    async createParameter(param) {
        let data = {};
        try {
            console.log("Parameter:: "+Parameter);
            data = await Parameter.findOneAndUpdate({id:param.id},param,{ upsert: true, new: true, setDefaultsOnInsert: true });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateParameter(parameter,propertyId) {
        let data = {};
        try {
            data = await Parameter.updateOne({id: propertyId}, parameter);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteParameter(propertyId) {
        let data = {};
        try {
            data = await Parameter.deleteOne({id : propertyId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ParameterRepository();