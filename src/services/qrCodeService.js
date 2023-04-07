const database = require('../db/postgresql/postgreSQL');

class qrCodeService {
   getQrinformation = async (param) => {
      return await database.QrCode.findOne(param, {raw: true})
   }
   updateQrCode = async (data, param) => {
    return await database.QrCode.update(data, { where: param})

   }
}

module.exports = new qrCodeService()