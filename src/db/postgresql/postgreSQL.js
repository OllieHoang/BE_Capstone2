const { User, initUser } = require("../models/UserModel");
const { Role, initRole } = require("../models/RoleModel");

const initAll = async () => {
   await initRole();
   await initUser();
}


module.exports = {
   User,
   Role,
   initAll,
}