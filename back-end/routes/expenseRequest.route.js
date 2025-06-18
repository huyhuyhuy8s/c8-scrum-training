import { Router } from "express";
import {
  getEmployeeRequestsController,
  getRequestsByStatusController,
  createExpenseRequestController,
} from "../controllers/expenseRequest.controller.js";

const router = Router();

router.post("/employee", createExpenseRequestController);
router.get("/employee/:employeeId", getEmployeeRequestsController);
router.get("/employee/status/:status", getRequestsByStatusController);

export default router;
