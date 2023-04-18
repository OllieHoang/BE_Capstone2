const qrCodeService = require('../services/QrCodeService')

class qrCodeController {
   //GET api/qrcode/:userId
   getQrinformation = async (req,res) => {
      const conditionObj = {
         userId: req.params.userId
     }
      await qrCodeService.getQrinformation(conditionObj)
      .then(data => {
         data? res.status(200).json(data) :res.status(400).send([])
      }).catch(err => {
         res.status(500).send(err);
      })
   }
   //POST api/qrcode/update/:userid
   updateQrCode = async (req,res) => {
      const update = req.body;
      const conditionObj = {
         userId: req.params.userId
     }
     await qrCodeService.updateQrCode(update, conditionObj)
     .then(data => {
      data? res.status(200).send("cập nhật thành công") :res.status(400).send([])
     }).catch(err => {
      res.status(500).send(err);
   })
   }
}

module.exports = new qrCodeController();