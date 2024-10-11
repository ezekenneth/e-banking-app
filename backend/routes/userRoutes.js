const express = require('express');

const { getUserAccount,
        makeTransaction, 
        createUser, 
        loginUser ,
        } = require('../controllers/usercontroller');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/account', authMiddleware, getUserAccount);
router.post('/transaction', authMiddleware, makeTransaction);
router.post('/register', createUser);
router.post('/login', loginUser);
module.exports = router;
