const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../configs/dbconfig");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);


const Role = sequelize.define("role", {
    roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    roleName: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    },
})

const initRole = async () => {
    return Role.sync({ alter: true })
}
module.exports = { Role, initRole };

