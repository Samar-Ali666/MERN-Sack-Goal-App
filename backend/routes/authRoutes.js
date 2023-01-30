import express from 'express';
import {
  registerUser,
  loginUser,
  getAuthenticatedUser,
} from '../controllers/auth/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getAuthenticatedUser);

export default router;
