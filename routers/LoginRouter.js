const express = require('express')
const login = require('../controllers/LoginController.js');
const csrf = require('csurf');

const router = express.Router();

//Login Routes
router.get('/', login.loginView);
router.get('/invalidCredentials', login.invalidCredentials);
router.post('/', login.handleLogin);


module.exports = router;
