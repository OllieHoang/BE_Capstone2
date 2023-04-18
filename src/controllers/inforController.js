const inforService = require('../services/inforService')

class inforController {
   getInformation = async (req,res) => {
      const qrName = req.params.qrCodeId;
      await inforService.getInformation(qrName)
   }
}

module.exports = new inforController()