import { Router } from "express";

import { getEmployeeRequests } from "../controllers/expenseRequest.controller.js";
import { createExpenseRequestController,changeStatusRequestController } from "../controllers/expenseRequest.controller.js";

import {
  createExpenseRequestController,
  getPendingRequestsController,
  getRequestByIdController,
  approveRequestController,
  rejectRequestController,
  getEmployeeRequestsController,
  updateExpenseRequestController,
  deleteExpenseRequestController,
  getRequestsByStatusController,
} from "../controllers/expenseRequest.controller.js";


const router = Router();

router.post("/employee", createExpenseRequestController);
router.get("/pending", getPendingRequestsController);
router.get("/employees/:employeeId", getEmployeeRequestsController);
router.get("/:id", getRequestByIdController);
router.put("/:id/approve", approveRequestController);
router.put("/:id/reject", rejectRequestController);
router.put("/my-requests/:id", updateExpenseRequestController);
router.delete("/my-requests/:id", deleteExpenseRequestController);
router.get("/finance/status/:status", getRequestsByStatusController);


router.patch("/:idFinance/:idExpenseRequest/:changeStatus",changeStatusRequestController)
export default router;

