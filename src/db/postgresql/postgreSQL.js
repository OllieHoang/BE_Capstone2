const { User, initUser } = require("../models/UserModel");
const { Role, initRole } = require("../models/RoleModel");
const { UserRole, initUserRole } = require("../models/UserRoleModel");

const initAll = async () => {
   await initUser();
   await initRole();
   await initUserRole();
}


module.exports = {
   User,
   Role,
   UserRole,
   // initAll,
}