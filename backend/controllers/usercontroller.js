const Account = require('../models/Account');
const userschema = require('../models/User')
const Transaction = require('../models/Transactions');
const asyncHandler = require('express-async-handler');


// Register a user

const createUser = asyncHandler (async (req , res) => {
  const email = req.body.email;
  const finduser = await userschema.findOne({email});
       
  if (!finduser){
      //create new user
      const newUser = await userschema.create(req.body);
      res.json(newUser);
  }else{
     throw new Error('user already exists')
  };
});


  //Get a User

const getUserAccount = asyncHandler(async (req, res) => {
  const account = await Account.findOne({ user: req.user.id }).populate('transactions');
  res.json(account);
});

  //Make Transaction

const makeTransaction = asyncHandler(async (req, res) => {
  const { amount, type } = req.body;
  
  let account = await Account.findOne({ user: req.user.id });
  
  if (type === 'debit' && account.balance < amount) {
    return res.status(400).json({ msg: 'Insufficient funds' });
  }

  const newTransaction = new Transaction({
    amount,
    type,
    account: account._id,
  });

  await newTransaction.save();
  account.transactions.push(newTransaction._id);

  if (type === 'credit') {
    account.balance += amount;
  } else {
    account.balance -= amount;
  }

  await account.save();
  res.json({ msg: 'Transaction successful', account });
});


module.exports = { getUserAccount, makeTransaction, createUser };
