const database = require('../db/postgresql/postgreSQL');

class inforService {
   getInformation = async (param) => {
      return await database.QrCode.findOne({where: param, raw: true})
   }
}

module.exports = new inforService()