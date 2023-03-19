const database = require('../db/postgresql/postgreSQL');
var jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const bcrypt = require('bcrypt');

class UserService {
   registerAccount = async (value) => {
    const hardPassword = bcrypt.hashSync(value.password, 10);
    const defaults = {
      fullName: value.fullName,
      email: value.email,
      password: hardPassword,
      IDcard: value.IDcard,
      phone: value.phone,
      dateOfBirth: value.dateOfBirth,
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
           expiresIn: config.jwtExpiration // test - 120s
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
    return await User.update(user, { where: conditionObj })
}
}

module.exports = new UserService();