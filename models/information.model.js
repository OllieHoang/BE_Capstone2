const mongoose = require('mongoose')
const Schema = mongoose.Schema

const informationSchema = new Schema({
  userId:{ type: String},  
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
   }],
   urlTheme: { type: String},
   theme: { type:mongoose.Schema.Types.ObjectId,
      ref: 'theme',

   },
   
})
module.exports = mongoose.model('Information', informationSchema)


