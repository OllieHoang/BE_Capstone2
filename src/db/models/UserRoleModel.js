const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../configs/dbconfig");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require('../models/UserModel');
const { Role } = require('../models/RoleModel');

const UserRole = sequelize.define("userRole", {
   userId: {
      type: DataTypes.UUID,
      references: {
          model: User,
          key: 'userId',
      },
      primaryKey: true
  },
  roleId: {
      type: DataTypes.UUID,
      references: {
          model: Role,
          key: 'roleId',
      },
      primaryKey: true
  }
})

Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });
User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });

const initUserRole = async () => {
    return UserRole.sync({ alter: true })
}
module.exports = { UserRole, initUserRole };
