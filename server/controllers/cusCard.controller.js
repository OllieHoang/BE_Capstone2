const cusCardService = require('../services/cusCard.service');
const linkModel = require('../models/link.model');
const cusCardController = {
   getcusCard: async(req,res) => {
      try {
         const userId = req.params.id;
         const link = await linkModel.findOne({userId: userId })
         if(link) {
            res.status(200).json({
               message: 'success',
               error: 0,
               link
            })
         }
      }catch(err) {
         res.status(500).json({
            message: `Có lỗi xảy ra! ${err.message}`,
            error: 1,
        })
      }
   },
   postcusCard: async(req,res) => {
      try{
         const data = req.body;
         console.log(req.body)
         const cusCard = await cusCardService.postcusCard(data);
         console.log("cusCard: " + cusCard)  
         if(cusCard){
            res.status(200).json({
               message: 'success',
               error: 0,
               cusCard
           })
         }
      }catch(err) {
         res.status(500).json({
            message: `Có lỗi xảy ra! ${err.message}`,
            error: 1,
        })
      }
   }
}

module.exports = cusCardController;

