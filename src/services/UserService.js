const database = require('../db/postgresql/postgreSQL');
var jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const bcrypt = require('bcrypt');
const { generateVerify, generatePassword } = require("../helper/General");
const { sendMailPassword } = require("../helper/SendEmail");


class UserService {
   registerAccount = async (value) => {
    const verificationCode = generateVerify();
    const hardPassword = bcrypt.hashSync(value.password, 10);
    const role = await database.Role.findOne({where:{roleName:"customer"}})
    const defaults = {
      fullName: value.fullName,
      email: value.email,
      password: hardPassword,
      IDcard: value.IDcard,
      phone: value.phone,
      dateOfBirth: value.dateOfBirth,
      verificationCode: verificationCode,
      roleName : role.roleName,
      roleId: role.roleId,
    }
      const userdata = await database.User.findOrCreate({
         where: { email: value.email },
         defaults,
         raw: true
     })
     console.log("userdata");
     console.log(userdata.id);
     if(userdata) {
       const qrCode = await database.QrCode.create({
        userId: userdata.id,
        raw: true
       })
       console.log("Qrcode");
       console.log(qrCode);
     }
     
     let check = userdata.find(userEle => {
         return typeof userEle === 'boolean';
     })
     return check ? userdata[0] : "EMAIL DUPPLICATE";
   }
   verifyAccount = async (value) => {
    return database.User.findOne({
      where: {
        verificationCode: value.verificationCode
      }
    }).then( async (data) => {
      if(!data) {
        return "Invalid verification code"
      }
      data.isVerified = true;
      await data.save();
    })
   }
   login = async(value) => {
      return database.User.findOne({
         where: {
           email: value.email
         }
       })
       .then( async (data) => {
         if (!data) {
           return "account Not found"
         }
         var passwordIsValid = bcrypt.compareSync(
             value.password,
           data.password
         );

         if (!passwordIsValid) {
             return "Invalid Password!"
         }
         if(data.isVerified === false) {
          return "unverified account"
         }
         const token = jwt.sign({
           id: data.userId
         }, process.env.jwtsecret, {
           expiresIn: config.jwtExpiration
         });
         
         return {...data.toJSON(), token};
       });
   }
   //Cập nhật user
   updateUser =  async (user, conditionObj) => {
    return await database.User.update(user, { where: conditionObj })
}
  //Cập nhật mật khẩu
  updatePassword = async (user, conditionObj) => {
    const hardPassword = bcrypt.hashSync(user.password, 10);
    const newPassword = {
      password: hardPassword
    }
    return await database.User.update(newPassword, { where: conditionObj })
}
    profile = async (user) => {
      return await database.User.findByPk({user, raw: true})
    }
    // // All user
    // getAllUser = async ()=>{
    //   return await database.User.findAll({raw: true})
    // }
    forgotPassword = async ( user )=>{
      return await database.User.findOne({
        where:{
          email: user.email
        },
        raw:true
      })
      .then( async data => {
        if(!data) {
          return "account Not found"
        }
      const newPassword = generatePassword();
      const hardPassword = bcrypt.hashSync(newPassword, 10);
      const password = {
        password: hardPassword
      }
      await database.User.update(password, {where: data})
      await sendMailPassword(data, newPassword);
      })
    }
}

module.exports = new UserService();