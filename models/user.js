const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const tokenGenerator = require('uuid-token-generator')
const Schema = mongoose.Schema
const saltFactor = 5
const tokenGen = new tokenGenerator(256, tokenGenerator.BASE62)

let userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email or Phone is required',
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required'
	},
	token: {
		type: String
	}
})

// password hashing with bycrypt
userSchema.pre('save', function(next){
	let user = this
	if(!user.isModified('password')) return next()
	bcrypt.hash(this.password, saltFactor, function(err,hash){
		if(err) return next(err)
		user.password = hash
		next()
	})
})

// generate token for new user
userSchema.pre('save', function(next){
	let user = this
	if(!user.isNew) return next()
	user.token = tokenGen.generate()
	next()
})

// method for comparing password
userSchema.methods.comparePassword = function(password, callback){
	bcrypt.compare(password, this.password, function(err,res){
		if(err) return callback(err)
		return callback(null, res)
	})
}

module.exports = mongoose.model('User', userSchema)
