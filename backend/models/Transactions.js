const mongoose = require('mongoose')



const transactionSchema =new mongoose.Schema ({
    amount: { type: Number, required: true,},
    type: { type: String, enum: ['credit', 'debit'],},
    date: { type: Date, default: Date.now,},
    account: {type: mongoose.Types.ObjectId, ref: 'Account'}
})


module.exports = mongoose.model('Transaction', transactionSchema);