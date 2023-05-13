const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    cardId: {
      type: String,
      required: true,
      unique: true
    },
    cardName: { type: String, },
    cardFullName: { type: String },
    cardPhone: { type: String },
    cardNote: { type: String, },
    cardAvatar: { 
      url: { type: String },
      publicId: { type: String }
   },
    user: { type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
})
module.exports = mongoose.model('Card', cardSchema)


