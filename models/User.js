const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String },
    email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	assocEmail: {type: Array},
    createdDate: { type: Date, default: Date.now }
});

// adds a method to a user document object to create a hashed password
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a user document object to check if provided password is correct
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
	}
	next()
})

module.exports = mongoose.model('User', userSchema);