const { User, initUser } = require("../models/UserModel");
const { Role, initRole } = require("../models/RoleModel");

const initAll = async () => {
   await initUser();
   await initRole();
}


module.exports = {
   User,
   Role,
   // initAll,
}