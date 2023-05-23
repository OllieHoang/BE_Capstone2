const inforService = require('../services/infor.service');

const inforController = {
   getInfor: async(req,res) => {
      try{
         const userId = req.body;
         const data = await inforService.getInfor(userId);
         console.log(data);
         if(data) {
            res.status(200).json({
               message: 'success',
               error: 0,
               data
           })
         } else {
            res.status(404).json({
                message: 'Không tìm thấy!',
                error: 1,
                data
            })
        } 
      }catch(err){
         res.status(500).json({
            message: `Có lỗi xảy ra! ${err.message}`,
            error: 1,
        })
      }
   },
   putInfor: async(req,res) => {
      try {
         const {informationName, informationPhone, informationNote, informationAvatar, informationLink, Theme} = req.body;
         const updatedInformation = {
            informationName,
            informationPhone,
            informationNote,
            informationAvatar,
            informationLink,
            Theme
          };
          console.log(updatedInformation)
         const userId = req.params.id;
         const inforId = await inforService.getById(userId);
         const updated = await inforService.putInfor(inforId.id, updatedInformation)
            if(updated) {
               res.status(200).json({
                  message: 'success',
                  error: 0,
                  updated
              })
             } else {
               res.status(404).json({
                  message: 'fail Updated',
                  error: 1,
                  updated
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

module.exports = inforController