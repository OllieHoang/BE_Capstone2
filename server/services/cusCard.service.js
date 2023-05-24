const cusCardModel = require('../models/cusCard.model');

const cusCardService = {
   postcusCard: async(data) => {
      return await cusCardModel.create({
            userId: data.userId,
            url: data.url,
            publicIdFront: data.publicIdFront,
            publicIdBack: data.publicIdBack
   })
}
}

module.exports = cusCardService;