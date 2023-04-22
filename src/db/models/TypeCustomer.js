const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../configs/dbconfig");
const { User } = require("./UserModel");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);

const TypeCustomer = sequelize.define("typecustomer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
})
// TypeCustomer.belongsTo(User,{foreignKey: "userId"})
const initTypeCustomer = async() =>{
    return TypeCustomer.sync({alter: true});
}

module.exports = {TypeCustomer, initTypeCustomer};