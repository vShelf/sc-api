const mongoose = require('mongoose')
const Schema = mongoose.Schema

let programSchema = new Schema({
  title: {
    type: String,
    required: 'Program should have a title',
    unique: true
  },
  code: {
    type: String,
    required: 'Program code should be provided',
		unique: true,
		uppercase: true
  },
  courses: [{ 
		type: Schema.Types.ObjectId,
		ref: 'Course',
	}]
})

module.exports = mongoose.model('Program', programSchema)
