
import { Router } from "express";
import { getEmployeeRequests } from "../controllers/expenseRequest.controller.js";
import { createExpenseRequestController,changeStatusRequestController } from "../controllers/expenseRequest.controller.js";

const router = Router();

router.post("/", createExpenseRequestController);
router.get('/', getEmployeeRequests);

router.patch("/:idFinance/:idExpenseRequest/:changeStatus",changeStatusRequestController)
export default router;