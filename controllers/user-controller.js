const User = require('../models/User.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {
	
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	// get one user
	show: (req, res) => {
		
		console.log(req.user)
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	},

	// create a new user
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err){ 
				return res.json({success: false, code: err.code})}
			// once user is created, generate a token to "log in":
			const token = signToken(user)
			res.json({success: true, message: "User created. Token attached.", token})
		})
	},

	// update an existing user
	updateUser: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "User updated.", user})
			})
		})
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	},

	// the login route
	authenticate: (req, res) => {
		// check if the user exists
		User.findOne({email: req.body.email}, (err, user) => {
			// if there's no user or the password is invalid
			if(!user || !user.validPassword(req.body.password)) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}

			const token = signToken(user)
			res.json({success: true, message: "Token attached.", token})
		})
	},

	// update an existing user with assoEmail
	updateAssocEmail: (req, res) => {
		
		User.findByIdAndUpdate(req.params.id, {$addToSet:{assocEmail:req.body.assocEmail}},{ new: true },(err, user) => {
			
			//console.log("******",user);
			//Object.assign(user, req.body)
			
			const token = signToken(user)
			res.json({success: true, message: "User updated.", token})
			// user.update({$addToSet:{assocEmail:req.body.assocEmail}},{ new: true },(err, updatedUser) => {
			// 	console.log("@@@@@@",updatedUser)
			// 	res.json({success: true, message: "User updated.", token})
			// })
		})
	},

}