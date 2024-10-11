const express = require('express');
const router = express.Router();
const { getUserAccount, makeTransaction, createUser } = require('../controllers/usercontroller');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/account', authMiddleware, getUserAccount);
router.post('/transaction', authMiddleware, makeTransaction);
router.post('/Register', createUser);
module.exports = router;
