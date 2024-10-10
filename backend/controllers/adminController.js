const User = require('../models/User');
const Account = require('../models/Account');

  getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('account');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

   deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ msg: 'User deleted', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {getAllUsers, deleteUser}
