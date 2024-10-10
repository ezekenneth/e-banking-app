const Account = require('../models/Account');
const Transaction = require('../models/Transactions');
const asyncHandler = require('express-async-handler');




const getUserAccount = async (req, res) => {
  try {
    const account = await Account.findOne({ user: req.user.id }).populate('transactions');
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

makeTransaction = async (req, res) => {
  const { amount, type } = req.body;
  try {
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
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { getUserAccount, makeTransaction };
