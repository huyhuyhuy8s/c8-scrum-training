import { Router } from "express";

import { createExpenseRequestController } from "../controllers/expenseRequest.controller.js";

const router = Router();

router.post("/", createExpenseRequestController);

export default router;