const mongoose = require('mongoose')
const Schema = mongoose.Schema

const informationSchema = new Schema({
    informationId: {
      type: String,
      required: true,
      unique: true
    },
    informationName: { type: String, },
    informationPhone: { type: String },
    informationNote: { type: String, },
    informationAvatar: { 
      url: { type: String },
      publicId: { type: String }
   },
   informationLink: [{
      title: { type: String},
      url: { type: String },
      publicId: { type: String}
   }],
   theme: { type:mongoose.Schema.Types.ObjectId,
      ref: 'theme',
   },
    user: { type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
})
module.exports = mongoose.model('Information', informationSchema)


