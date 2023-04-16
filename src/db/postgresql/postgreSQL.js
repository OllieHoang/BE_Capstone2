const { User, initUser } = require("../models/UserModel");
const { Role, initRole } = require("../models/RoleModel");
const { QrCode, initQrCode } = require("../models/QrCodeModel");

const initAll = async () => {
   await initRole();
   await initUser();
   await initQrCode();
}


module.exports = {
   User,
   Role,
   QrCode,
   initAll,
}