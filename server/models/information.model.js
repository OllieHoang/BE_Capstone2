const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { v4: uuidv4 } = require('uuid');
const informationSchema = new Schema({
   informationId: { type: String,default: uuidv4, unique: true},
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
   Theme: {
      color: {type: String},
      background:{type: String},
      backgroundColor: {type: String},
   },
})
module.exports = mongoose.model('Information', informationSchema)


