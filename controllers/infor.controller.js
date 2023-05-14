const inforService = require('../services/infor.service');

const inforController = {
   getInfor: async(req,res) => {
      try{
         const id = req.params;
         const data = await inforService.getInfor(id);
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
            message: `Có lỗi xảy ra! ${error.message}`,
            error: 1,
        })
      }
   },
   getCreateInfor: async(req,res) => {
      try{
         const inforData = await  
         await inforService.getCreateInfor()
      }catch(err) {
         res.status(500).json({
            message: err.message,
            error: 1,
         })
      }
   },
   createInfor: async(req,res) => {
      try{
         const data = req.body;
         console.log(data);
         const createData = await inforService.createInfor(data);
         if(createData) {
            

         }
      }catch(err) {

      }
   },
   postInfor: async(req,res) => {
      try{
         const data = req.body;
         const id = req.params;
         const theme = await inforService.getById(id);
         const post = await inforService.postInfor(id, data);
         if(post) {
            console.log("controller: " + post)
         }
      }catch(err) {

      }
   }
}

module.exports = inforController