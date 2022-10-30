const express = require('express');
const login = require('../controllers/LoginController.js');

const router = express.Router();

// Student login Routes
router.get('/', login.loginView);
router.get('/invalidCredentials', login.invalidCredentials);
router.post('/', login.handleLogin);

// Professor login routes
router.get('/profLogin', login.profLoginView);
router.get('/invalidProfCredentials', login.invalidProfCredentials);
router.post('/profLogin', login.handleProfLogin);

module.exports = router;
