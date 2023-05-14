const inforModel = require('../models/information.model');

const inforService = {
   getInfor: async(id) => {
      return await inforModel.findOne(id);
   },
   GetCreateInfor: async(data) => {
      
   },
   postInfor: async(id, data) => {
      console.log(data)
      return await inforModel.findByIdAndUpdate(id)
   }
}

module.exports = inforService