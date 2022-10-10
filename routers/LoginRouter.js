import express from 'express';
import { loginView, handleLogin } from '../controllers/LoginController.js';

const router = express.Router();

router.get('/', loginView);
router.post('/', handleLogin);

export {
  router,
};
