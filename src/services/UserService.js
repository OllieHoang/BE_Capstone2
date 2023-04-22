const database = require('../db/postgresql/postgreSQL');
var jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const bcrypt = require('bcrypt');
const { generateVerify, generateRandom } = require("../helper/General");
const { hardCode } = require("../helper/hardPassword");
const { sendMailPassword } = require("../helper/SendEmail");

class UserService {
   registerAccount = async (value) => {
    console.log(value)
    const verificationCode = generateVerify();
    const hardPassword = hardCode(value.password);
    const role = await database.Role.findOne({where:{roleName:"customer"}})
    const userType = await database.TypeCustomer.findOne({where:{name:"free"}});
    const defaults = {
      fullName: value.fullName,
      email: value.email,
      password: hardPassword,
      IDcard: value.IDcard,
      phone: value.phone,
      dateOfBirth: value.dateOfBirth,
      verificationCode: verificationCode,
      roleId: role.roleId,
      userTypeId: userType.id,
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
        verificationCode : value
      }
    }).then(async (data) => {
      if(!data) {
        return "Invalid"
      }
      if(data.isVerified) {
        return "Verified"
      } 
      data.isVerified = true;
      await data.save();
      const qrName = generateRandom();
      await database.QrCode.create({
        userId: data.userId,
        qrCodeName: qrName,
        qrfullName: data.fullName,
        qrPhone: data.phone,
        raw: true
      })
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

  //Đổi mật khẩu
  changePassword = async (value, conditionObj) => {
    const user = await database.User.findOne({where: conditionObj})
    console.log(user)
    var passwordIsValid = bcrypt.compareSync(
      value.oldPassword,
      user.password
    );
    console.log(value.oldPassword);
    console.log(user.password);
    if(!passwordIsValid) {
      return "wrong password!"
    }
    const hardPassword = hardCode(value.newPassword);
    const password = {
      password: hardPassword
    }
    await database.User.update(password, { where: conditionObj })
}

    //Quên mật khẩu và đổi mật khẩu mới
    handlePasswordReset = async (value, conditionObj) => {
      const hardPassword = hardCode(value.newPassword);
      const password = {
        password: hardPassword
      }
      return await database.User.update(password, { where: conditionObj })
    }

    profile = async (user) => {
      return await database.User.findOne({where: user,  include: [{ model: database.TypeCustomer}]})
    }

    // All user
    getAllUser = async ()=>{
      return await database.User.findAll({include: [{ model: database.TypeCustomer}]});
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
      await sendMailPassword(data);
      })
    }
}

module.exports = new UserService();