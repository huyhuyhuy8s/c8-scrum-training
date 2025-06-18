import { Router } from "express";
import { getEmployeeRequests } from "../controllers/expenseRequest.controller.js";
import { createExpenseRequestController } from "../controllers/expenseRequest.controller.js";
import { logout } from "../controllers/auth.controller.js";
const router = Router();

router.post("/employee", createExpenseRequestController);
router.get("/employee/:employeeId", getEmployeeRequests);
router.post("/logout/:employeeId", logout);
export default router;
