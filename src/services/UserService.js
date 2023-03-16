const database = require('../db/postgresql/postgreSQL');
const bcrypt = require('bcrypt');

class UserService {
   registerAccount = async (value) => {
      const userdata = await database.User.findOrCreate({
         where: { email: value.email },
         defaults: value,
         raw: true
     })
     let check = userdata.find(userEle => {
         return typeof userEle === 'boolean';
     })
     return check ? userdata[0] : "EMAIL DUPPLICATE";
   }
}

module.exports = new UserService();