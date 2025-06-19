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

  filterTeamRequestsController,
  exportFinalApprovedRequestsController

} from "../controllers/expenseRequest.controller.js";
const router = Router();

router.post("/employee", createExpenseRequestController);

router.get("/expense-requests-pending", getPendingRequestsController); //Lấy những request có status = PENDING
router.get("/team/:managerId", getTeamRequestsController); //c8-10: Manager lọc những request có approvedById = managerId (Công Thuận)
router.get("/detail-expense-requests-of-employee/:employeeId", getEmployeeRequestsController); //Lấy những request của 1 employee (Công Thuận)
router.get("/detail-expense-request-by-id/:id", getRequestByIdController); //Lấy 1 request cụ thể dựa vào id của request (Công Thuận)

router.put("/manager-approve/:id", approveRequestController); // C8-11: manager duyệt chấp nhận request dựa vào id của request (Công Thuận)
router.put("/manager-reject/:id", rejectRequestController); //C8-11: manager từ chối request dựa vào id của request (Công Thuận)

router.put("/update-my-requests/:id", updateExpenseRequestController); //C8-8: Update request của employee dựa vào id của request (Công Thuận)(Nhật sẽ sửa lại cái này)
router.delete("/delete-my-requests/:id", deleteExpenseRequestController); //C8-8: Delete request của employee dựa vào id của request (Công Thuận)

router.get("/finance/status/:status", getRequestsByStatusController);


router.patch(
  "/:idFinance/:idExpenseRequest/:changeStatus",
  changeStatusRequestController
);

router.patch("/finance/:id/:status", updateExpenseRequestStatusController);
router.patch("/employee/:id/:status", updateExpenseRequestStatusController);



// Manager can filter requests Employee by employee_name, date(startDate, endDate), or status
// filter {employee_name, startDate, endDate, status}
router.get("/team-by-filter/:managerId/filter", filterTeamRequestsController);  //C8-13: Manager lọc những request có approvedById = managerId, và kèm lọc filter (Công Thuận)


// Finance officer can export Final Approved requests by date range
// filter {startDate, endDate}
router.get("/finance/:financeId/export/final-approved", exportFinalApprovedRequestsController);  //C8-16: Finance officer lọc những request có finalApprovedById = financeId và status = FINAL_APPROVED (Công Thuận)

export default router;
