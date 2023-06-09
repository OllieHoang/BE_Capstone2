const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../configs/dbconfig");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);


const User = sequelize.define("user", {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    fullName: DataTypes.STRING(30),
    dateOfBirth: DataTypes.DATE,
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        // allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        // allowNull: false
    },
    IDcard: DataTypes.STRING(20),
    phone: DataTypes.STRING(11),
})

const initUser = async () => {
    return User.sync({ alter: true })
}
module.exports = { User, initUser };

