import express from 'express';
import { getEmployeeRequests } from '../controllers/expenseController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', auth, getEmployeeRequests);

export default router;
