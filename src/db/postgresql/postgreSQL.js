const { User, initUser } = require("../models/UserModel");
const { Role, initRole } = require("../models/RoleModel");
const { QrCode, initQrCode } = require("../models/QrCodeModel");
const {TypeCustomer, initTypeCustomer} =require("../models/TypeCustomer")
const{ServicePackage,initServicePackage} =require("../models/ServicePackage")

const initAll = async () => {
   await initRole();
   await initUser();
   await initQrCode();
   await initTypeCustomer();
   await initServicePackage();
}


module.exports = {
   User,
   Role,
   QrCode,
   TypeCustomer,
   ServicePackage,
   initAll,
}