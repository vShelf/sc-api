const mongoose = require('mongoose')
const { fileSchema } = require('./fileSchema')
const Schema = mongoose.Schema

let courseSchema = new Schema({
  code: {
    type: String,
    required: 'Course code is highly required',
		unique: true,
		trim: true
	},
	programs: [{ 
		type: Schema.Types.ObjectId,
		ref: 'Program'
	}],
  files: [{
		type: fileSchema
	}]
})

module.exports = mongoose.model('Course', courseSchema)
