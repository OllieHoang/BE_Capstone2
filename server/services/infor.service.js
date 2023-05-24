const inforModel = require('../models/information.model');

const inforService = {
   getById: async(id) => {
      return await inforModel.findOne({userId: id})
  },

   putInfor: async(id, data) => {
      return await inforModel.findByIdAndUpdate(id,data, {new: true})
   }
}

module.exports = inforService