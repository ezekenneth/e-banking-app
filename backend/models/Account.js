const mongoose = require('mongoose')


const accountSchema = new mongoose.Schema({
    balance: { type: Number, default: 0,},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'},
});





module.exports = mongoose.model('Account' , accountSchema);