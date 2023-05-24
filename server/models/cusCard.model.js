const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cusCardSchema = new Schema({
      userId: { type: String },
      url: { type: String },
      publicIdFront: { type: String },
      publicIdBack: { type: String },
})
module.exports = mongoose.model('cusCard', cusCardSchema)


