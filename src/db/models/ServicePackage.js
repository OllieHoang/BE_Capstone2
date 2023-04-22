const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../configs/dbconfig");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);

const ServicePackage = sequelize.define("servicepackage", {
    namePackage: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    pricePackage:{
        type: DataTypes.STRING,
    }, 
    duration_in_months:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

const initServicePackage = async() =>{
    return ServicePackage.sync({alter: true});
}

module.exports = {ServicePackage, initServicePackage};