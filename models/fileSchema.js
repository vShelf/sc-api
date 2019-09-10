const mongoose = require('mongoose')
const Schema = mongoose.Schema

let fileSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  uri: {
    type: String,
    required: 'File URI is required'
  },
  size: {
    type: Number,
    required: 'Size is required'
  },
  extension: {
    type: String,
    required: 'Extension is required'
  },
  author: {
    type: String
  },
  isLecturer: {
    type: Boolean,
    default: false
  }
})

module.exports = {
	fileSchema,
	File: mongoose.model('File', fileSchema)
}
