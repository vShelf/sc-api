const router = require('express').Router()
const User = require('../models/user')

// login
// req.body -  {email, password}
// TIK
router.post('/login', (req, res) => {
	const body = req.body
	User.findOne({email: body.email}, function(err, user){
		if(err) res.json({error: true, message: "Error finding user", ERR: err})
		if(!user) res.json({success: false, message: "User can't be found!"})
		user.comparePassword(body.password, function(err, match){
			if(err) res.json({error: true, message: "error comparing passwords", ERR: err})
			if(match) res.json({success: true, token: user.token})
			else res.json({success: false, message: "Invalid Password!"})
		})
	})
})

// create new user
// req.body - {email, password}
// TIK
router.post('/new', (req, res) => {
	let newUser = new User(req.body)
	newUser.save(function(err, user){
		if(err) res.json({error: true, message: "Error creating user", ERR: err})
		res.json({token: user.token})
	})
})

module.exports = router
