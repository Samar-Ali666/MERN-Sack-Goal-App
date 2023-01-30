import express from 'express';
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

// Initializing router
const router = express.Router();

// Goal Routes
router.route('/').get(authMiddleware, getGoals).post(authMiddleware, setGoal);
router
  .route('/:id')
  .put(authMiddleware, updateGoal)
  .delete(authMiddleware, deleteGoal);

export default router;
