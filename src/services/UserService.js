const database = require('../db/postgresql/postgreSQL');
var jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const bcrypt = require('bcrypt');
const generateVerify = require("../helper/generateVerify");

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
     let check = userdata.find(userEle => {
         return typeof userEle === 'boolean';
     })
     return check ? userdata[0] : "EMAIL DUPPLICATE";
   }
   verifyAccount = async (value) => {
    return database.User.findOne({
      where: {
        email: value.email,
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
         console.log(passwordIsValid);

         if (!passwordIsValid) {
             return "Invalid Password!"
         }
         const token = jwt.sign({
           id: data.userId
         }, process.env.jwtsecret, {
           expiresIn: config.jwtExpiration
         });
         
        //  const roles = await database.UserRole.findAll({
        //      where: {userId: user.userId}
        //  });
        //  const roleUser =await Promise.all(roles.map(async element => {
        //      return await database.Role.findOne({
        //          where: {roleId: element.roleId}
        //      }).then( rl=>{
        //        return  rl.roleName;
        //      });
        //  }));
         return {...data.toJSON(), token};
       });
   }
   //Cập nhật user
   updateUser = async (user, conditionObj) => {
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
    // All user
    getAllUser = async ()=>{
      return await database.User.findAll({raw: true})
    }
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
      const verificationCode = generateVerify();
        const newVCode = {
          verificationCode: verificationCode
        }
        await database.User.update(newVCode, {where: data})
        return data;  
      })
    }
}

module.exports = new UserService();