import { Router } from "express";

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
  changeStatusRequestController,
  getTeamRequestsController,
  updateExpenseRequestStatusController,
} from "../controllers/expenseRequest.controller.js";
const router = Router();

router.post("/employee", createExpenseRequestController);
router.get("/pending", getPendingRequestsController);
router.get("/team/:managerId", getTeamRequestsController);
router.get("/employee/:employeeId", getEmployeeRequestsController);
router.get("/finance/status/:status", getRequestsByStatusController);
router.patch("/finance/:id/:status", updateExpenseRequestStatusController);
router.patch("/employee/:id/:status", updateExpenseRequestStatusController);
router.get("/:id", getRequestByIdController);
router.put("/:id/approve", approveRequestController);
router.put("/:id/reject", rejectRequestController);
router.put("/my-requests/:id", updateExpenseRequestController);
router.delete("/my-requests/:id", deleteExpenseRequestController);
router.patch(
  "/:idFinance/:idExpenseRequest/:changeStatus",
  changeStatusRequestController
);
export default router;
