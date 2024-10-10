const express = require('express');
const router = express.Router();
const { getUserAccount, makeTransaction } = require('../controllers/usercontroller');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/account', authMiddleware, getUserAccount);
router.post('/transaction', authMiddleware, makeTransaction);

module.exports = router;
