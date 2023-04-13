const inforService = require('../services/inforService')

class inforController {
   getInfor = async (req,res) => {
      const qrName = req.params.qrCodeId;
      await inforService.getInfor(qrName)
   }
}

module.exports = new inforController()