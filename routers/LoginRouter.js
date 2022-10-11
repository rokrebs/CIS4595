const express = require('express')
const login = require('../controllers/LoginController.js');

const router = express.Router();

router.get('/', login.loginView);
router.post('/', login.handleLogin);

module.exports = router;
