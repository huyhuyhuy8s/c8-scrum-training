import { Router } from "express";
import { getEmployeeRequests } from "../controllers/expenseRequest.controller.js";
import { createExpenseRequestController } from "../controllers/expenseRequest.controller.js";

const router = Router();

router.post("/employee", createExpenseRequestController);
router.get("/employee/:employeeId", getEmployeeRequests);

export default router;
