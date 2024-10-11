const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const crypto = require("crypto")


const userSchema = new mongoose.Schema({
    name: {type: String, required: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true, },
    date: {type: Date, default:Date.now},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    account: { type: mongoose.Schema.Types.ObjectId,  ref: 'Account'},      
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password)
};
//reset pasword
userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
  
    // Save the hashed token and its expiration date to the user object
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
  
    return resetToken;
};


module.exports= mongoose.model('User' , userSchema);