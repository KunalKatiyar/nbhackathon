let parameterRepository = require("../repository/parameter.repository");
let propertyService  = require('../service/property.service');
let {Parameter } = require('../model/parameter.model');
let buyingDemandRepository = require("../repository/buyingDemand.repository");
let rentDemandRepository = require("../repository/rentDemand.repository");
let pricePerSqftRepository = require("../repository/pricePerSqft.repository");
let avgRentRepository = require("../repository/avgRent.repository");
class ParameterService {
  letructor() {}

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

  async getSortedProperties(price) {
    return await parameterRepository.getSortedProperties(price);
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
    let val = await avgRentRepository.getByLocalityAndType(nb_locality,type);
    console.log(val);
    return val;
  }

  async saveParameters(){
    let properties = await propertyService.getProperties();
    console.log(properties);
    let createdParameters = [];
    for(let i=0;i<100;i++) {
        let property = properties[i];
        let parameter  = new Parameter();

        
        parameter.id = property.id;
        parameter.price = property.price;
        parameter.locality = property.nb_locality;
        parameter.sqft = property.property_size;
        parameter.redirect_url = property.short_url;
        parameter.photo_urls = property.photo_urls;
        parameter.yoy_growth = 6;
        let avgRentByLocalityAndType = await this.getAvgRentByLocalityAndType(property.nb_locality,property.type);
        if(avgRentByLocalityAndType == null || avgRentByLocalityAndType == undefined) {
          avgRentByLocalityAndType = 17716;
        }
        console.log("avgRentByLocalityAndType = "+typeof(property.price));
        parameter.rental_yield = (avgRentByLocalityAndType*1200)/parameter.price;
        console.log("rental_yield = "+parameter.rental_yield);
        if(parameter.rental_yield == null) {
            parameter.rental_yield = 4;
        }

        let rentalDemand = await this.getrentDemandByTypeAndLocality(property.nb_locality,property.type);
        if(rentalDemand == null || rentalDemand == undefined) {
          rentalDemand = 9;
        }
        console.log("rental Demand = "+rentalDemand);
        parameter.rental_demand = "Medium Demand";
        if (rentalDemand == null || rentalDemand == undefined) {
            parameter.rental_demand = "Medium Demand";
        }
        else if(rentalDemand>0 && rentalDemand<15){
            parameter.rental_demand = "Easy Rental";
        } else if(rentalDemand>=0 && rentalDemand<15){
            parameter.rental_demand = "Normal Rental";
        } else if(rentalDemand>= 30) {
            parameter.rental_demand = "Tough Rental";
        } else {
            parameter.rental_demand = "Medium Demand";
        }
        parameter.buyerDemand = "Medium Demand";
        let buyerDemand = await this.getBuyingDemandByLocality(property.nb_locality);
        if(buyerDemand == null || buyerDemand == undefined) {
          rentalDemand = 123;
        }
        if (buyerDemand == null || buyerDemand == undefined) {
            parameter.buyerDemand = "Medium Demand";
        }
        else if(buyerDemand>0 && buyerDemand<25){
            parameter.buyerDemand = "High Demand";
        } else if(rentalDemand>=25 && rentalDemand<45){
            parameter.buyerDemand = "Medium Demand";
        } else if(rentalDemand>= 45) {
            parameter.buyerDemand = "Low Demand";
        } else {
            parameter.buyerDemand = "Medium Demand";
        }
        parameter.value_for_money = "Good Deal";
        let propertyAvgsqrft = (parameter.price/parameter.sqft);
        let localityAvgSqrft = this.getPricePerSqrftByLocality(property.nb_locality);
        if(localityAvgSqrft == null || localityAvgSqrft == undefined) {
          localityAvgSqrft = 9954;
        }
        if(localityAvgSqrft == null || localityAvgSqrft == undefined) {
            parameter.value_for_money = "Good Deal";
        }
        else if(propertyAvgsqrft < localityAvgSqrft*0.85) {
            parameter.value_for_money = "Good Deal";
        } else if(propertyAvgsqrft<=1.15*localityAvgSqrft) {
            parameter.value_for_money = "Deal";
        } else if(propertyAvgsqrft>1.15*localityAvgSqrft) {
            parameter.value_for_money = "OverPriced";
        } else{
            parameter.value_for_money = "Good Deal";
        }
        parameter.roi = 0;
        parameter.roi = (((parameter.price*0.1) + avgRentByLocalityAndType*12)/parameter.price)*100;
        console.log(parameter);
        let createdParameter = await parameterRepository.createParameter(parameter);
        createdParameters.push(createdParameter);
      }
    
    return createdParameters;
  }

  
}

module.exports = new ParameterService();
