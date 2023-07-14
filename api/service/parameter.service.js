const parameterRepository = require("../repository/parameter.repository");
const propertyService  = require('../service/property.service');
const {Parameter } = require('../model/parameter.model');
const buyingDemandRepository = require("../repository/buyingDemand.repository");
const rentDemandRepository = require("../repository/rentDemand.repository");
const pricePerSqftRepository = require("../repository/pricePerSqft.repository");
const avgRentRepository = require("../repository/avgRent.repository");
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
  async getrentDemandByTypeAndLocality(type, nb_locality) {
    return await rentDemandRepository.getByTypeAndLocality(type,nb_locality);
  }
  async getBuyingDemandByLocality(nb_locality) {
    return await buyingDemandRepository.getByLocality(nb_locality);
  }
  async getPricePerSqrftByLocality(nb_locality) {
    return await pricePerSqftRepository.getByLocality(nb_locality);
  }
  async getAvgRentByLocalityAndType(nb_locality,type) {
    return await avgRentRepository.getByLocalityAndType(nb_locality,type);
  }

  async saveParameters(){
    const property = await propertyService.getProperty("8a9f068288f427f90188f49c142f056e");
    console.log(property);
    const createdParameters = [];
    
        const parameter  = new Parameter();

        
        parameter.id = property.id;
        parameter.price = property.property_resale.price;
        parameter.locality = property.nb_locality;
        parameter.sqft = property.property_size;
        parameter.redirect_url = property.short_url;
        parameter.yoy_growth = 6;
        const avgRentByLocalityAndType =await this.getAvgRentByLocalityAndType(property.nb_locality,property.type);
        parameter.rental_yield = (avgRentByLocalityAndType*1200)/parameter.price;
        if(parameter.rental_yield == null) {
            parameter.rental_yield = 4;
        }

        const rentalDemand = await this.getrentDemandByTypeAndLocality(property.nb_locality,property.type);
        console.log("rental Demand = "+rentalDemand);
        if(rentalDemand>0 && rentalDemand<15){
            parameter.rental_demand = "Easy Rental";
        } else if(rentalDemand>=0 && rentalDemand<15){
            parameter.rental_demand = "Normal Rental";
        } else if(rentalDemand>= 30) {
            parameter.rental_demand = "Tough Rental";
        } else {
            parameter.rental_demand = "Medium Demand";
        }

        const buyerDemand = await this.getBuyingDemandByLocality(property.nb_locality);
        if(buyerDemand>0 && buyerDemand<25){
            parameter.buyerDemand = "High Demand";
        } else if(rentalDemand>=25 && rentalDemand<45){
            parameter.buyerDemand = "Medium Demand";
        } else if(rentalDemand>= 45) {
            parameter.buyerDemand = "Low Demand";
        } else {
            parameter.buyerDemand = "Medium Demand";
        }

        const propertyAvgsqrft = (parameter.price/parameter.sqft);
        const localityAvgSqrft = this.getPricePerSqrftByLocality(property.nb_locality);
        if(propertyAvgsqrft < localityAvgSqrft*0.85) {
            parameter.value_for_money = "Good Deal";
        } else if(propertyAvgsqrft<=1.15*localityAvgSqrft) {
            parameter.value_for_money = "Deal";
        } else if(propertyAvgsqrft>1.15*localityAvgSqrft) {
            parameter.value_for_money = "OverPriced";
        } else{
            parameter.value_for_money = "Good Deal";
        }
        parameter.roi = ((parameter.price*1.1) + avgRentByLocalityAndType*12)/parameter.price;
        const createdParameter = await parameterRepository.createParameter(parameter);
        createdParameters.push(createdParameter);
    
    return createdParameters;
  }

  
}

module.exports = new ParameterService();
