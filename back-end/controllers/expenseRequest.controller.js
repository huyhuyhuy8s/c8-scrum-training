import {
  createExpenseRequest,
  updateExpenseRequestStatus,
  changeStatusRequest,
  getPendingRequests,
  getRequestById,
  approveRequest,
  rejectRequest,
  getEmployeeRequests,
  updateExpenseRequest,
  deleteExpenseRequest,
  getRequestsByStatus,
  getTeamRequests,
  getTotalSpentPerEmployee,
  getTotalSpentPerDepartment,
} from "../services/expenseRequest.service.js";
export const createExpenseRequestController = async (req, res) => {
  try {
    const expenseRequest = req.body;
    const newExpenseRequest = await createExpenseRequest(expenseRequest);
    res.status(201).json(newExpenseRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fix: Complete the getEmployeeRequestsController function
export const getEmployeeRequestsController = async (req, res) => {
  try {
    const { employeeId } = req.params;

    if (!employeeId) {
      return res.status(400).json({
        success: false,
        message: "Employee ID is required",
      });
    }

    const requests = await getEmployeeRequests(employeeId);

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching employee requests",
      error: error.message,
    });
  }
};
// Get all pending requests
export const getPendingRequestsController = async (req, res) => {
  try {
    const requests = await getPendingRequests();
    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching pending requests",
      error: error.message,
    });
  }
};

// Get request by ID
export const getRequestByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await getRequestById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    res.status(200).json({
      success: true,
      data: request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching request",
      error: error.message,
    });
  }
};

// Approve request - comment should be optional
export const approveRequestController = async (req, res) => {
  try {
    const { id } = req.params;
    const { managerId, comment } = req.body;

    if (!managerId) {
      return res.status(400).json({
        success: false,
        message: "Manager ID is required",
      });
    }

    const updatedRequest = await approveRequest(
      id,
      managerId,
      comment || "Approved"
    );

    res.status(200).json({
      success: true,
      message: "Request approved successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error approving request",
      error: error.message,
    });
  }
};

// Reject request
export const rejectRequestController = async (req, res) => {
  try {
    const { id } = req.params;
    const { managerId, comment } = req.body;

    if (!managerId) {
      return res.status(400).json({
        success: false,
        message: "Manager ID is required",
      });
    }

    const updatedRequest = await rejectRequest(
      id,
      managerId,
      comment ? comment.trim() : "Rejected"
    );

    res.status(200).json({
      success: true,
      message: "Request rejected successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error rejecting request",
      error: error.message,
    });
  }
};

// Update expense request
export const updateExpenseRequestController = async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeId, description, amount, image } = req.body;

    if (!employeeId) {
      return res.status(400).json({
        success: false,
        message: "Employee ID is required",
      });
    }

    if (!description && !amount && !image) {
      return res.status(400).json({
        success: false,
        message:
          "At least one field (description, amount, or image) must be provided for update",
      });
    }

    const updatedRequest = await updateExpenseRequest(id, employeeId, {
      description,
      amount: amount ? parseFloat(amount) : undefined,
      image,
    });

    res.status(200).json({
      success: true,
      message: "Request updated successfully",
      data: updatedRequest,
    });
  } catch (error) {
    if (error.message === "Request not found or cannot be edited") {
      return res.status(404).json({
        success: false,
        message: "Request not found or can only edit pending requests",
      });
    }

    res.status(500).json({
      success: false,
      message: "Error updating request",
      error: error.message,
    });
  }
};

// Delete expense request
export const deleteExpenseRequestController = async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeId } = req.body;

    if (!employeeId) {
      return res.status(400).json({
        success: false,
        message: "Employee ID is required",
      });
    }

    await deleteExpenseRequest(id, employeeId);

    res.status(200).json({
      success: true,
      message: "Request deleted successfully",
    });
  } catch (error) {
    if (error.message === "Request not found or cannot be deleted") {
      return res.status(404).json({
        success: false,
        message: "Request not found or can only delete pending requests",
      });
    }

    res.status(500).json({
      success: false,
      message: "Error deleting request",
      error: error.message,
    });
  }
};

export const getRequestsByStatusController = async (req, res) => {
  try {
    const { status } = req.params;
    const requests = await getRequestsByStatus(status);

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching requests by status",
      error: error.message,
    });
  }
};

// Change status request (Finance)
export const changeStatusRequestController = async (req, res) => {
  try {
    const idFinance = parseInt(req.params.idFinance);
    const idExpenseRequest = parseInt(req.params.idExpenseRequest);
    const changeStatus = req.params.changeStatus;
    const rejectedReason = "";

    if (changeStatus != "FINAL_APPROVED") {
      const rejectedReason = req.body.rejectedReason;
    }

    const updatedRequest = await changeStatusRequest(
      parseInt(idFinance),
      parseInt(idExpenseRequest),
      changeStatus,
      rejectedReason
    );

    res.status(200).json({
      success: true,
      message: "Request status updated successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating request status",
      error: error.message,
    });
  }
};
// Get all requests from manager's team
export const getTeamRequestsController = async (req, res) => {
  try {
    const { managerId } = req.params;

    if (!managerId) {
      return res.status(400).json({
        success: false,
        message: "Manager ID is required",
      });
    }

    const requests = await getTeamRequests(managerId);

    res.status(200).json({
      success: true,
      message: "Team requests retrieved successfully",
      data: requests,
      count: requests.length,
    });
  } catch (error) {
    if (
      error.message.includes("Manager not found") ||
      error.message.includes("insufficient permissions")
    ) {
      return res.status(403).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Error fetching team requests",
      error: error.message,
    });
  }
};

// Update expense request status
export const updateExpenseRequestStatusController = async (req, res) => {
  try {
    const { id, status } = req.params;
    // Validate status
    const validStatuses = [
      "PENDING",
      "APPROVED",
      "REJECTED",
      "FINAL_APPROVED",
      "WRAPPED",
    ];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
    }

    const updatedRequest = await updateExpenseRequestStatus(id, status);
    res.status(200).json({
      success: true,
      message: "Request status updated successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating request status",
      error: error.message,
    });
  }
};

// Filter team requests by employee name, date, or status
export const filterTeamRequestsController = async (req, res) => {
  try {
    const { managerId } = req.params;
    const { employee_name, status, startDate, endDate } = req.query;

    if (!managerId) {
      return res.status(400).json({
        success: false,
        message: "Manager ID is required",
      });
    }

    const filters = {};
    if (employee_name) filters.employee_name = employee_name.trim();
    if (status) filters.status = status.trim();
    if (startDate) filters.startDate = startDate.trim();
    if (endDate) filters.endDate = endDate.trim();

    const requests = await filterTeamRequests(managerId, filters);

    res.status(200).json({
      success: true,
      message: "Filtered team requests retrieved successfully",
      data: requests,
      count: requests.length,
      filters: filters,
    });
  } catch (error) {
    if (
      error.message.includes("Manager not found") ||
      error.message.includes("insufficient permissions")
    ) {
      return res.status(403).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Error filtering team requests",
      error: error.message,
    });
  }
};

export const exportFinalApprovedRequestsController = async (req, res) => {
  try {
    const { financeId } = req.params;
    const { startDate, endDate } = req.query;

    if (!financeId) {
      return res.status(400).json({
        success: false,
        message: "Finance ID is required",
      });
    }

    const filters = {};
    if (startDate) filters.startDate = startDate;
    if (endDate) filters.endDate = endDate;

    const requests = await exportFinalApprovedRequests(financeId, filters);

    res.status(200).json({
      success: true,
      message: "Final approved requests retrieved successfully",
      data: requests,
      count: requests.length,
      filters: filters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error exporting final approved requests",
      error: error.message,
    });
  }
};

export const totalSpentPerEmployeeController = async (req, res) => {
  try {
    const data = await getTotalSpentPerEmployee();
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching total spent per employee:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const totalSpentPerDepartmentController = async (req, res) => {
  try {
    const data = await getTotalSpentPerDepartment();
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching total spent per department:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
