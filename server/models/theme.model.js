const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThemeSchema = new Schema({
    themeName: { type: String, },
    theme: { 
      url: { type: String },
      publicId: { type: String }
   },
})
module.exports = mongoose.model('Theme', ThemeSchema)