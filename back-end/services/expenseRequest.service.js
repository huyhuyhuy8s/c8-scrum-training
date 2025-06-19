import cloudinary from "../libs/cloudinary.js";
import SystemLogRepository from "../models/systemLog.js";
import ExpenseRequestRepository from "../models/expenseRequest.js";
import EmployeeRepository from "../models/employee.js";

export const createExpenseRequest = async (expenseRequest) => {
  try {
    const { image } = expenseRequest;
    let imageUrl = "";

    if (image) {
      const result = await cloudinary.uploader.upload(image, {
        folder: "expense-requests",
      });
      imageUrl = result.secure_url;
    }

    const newExpenseRequest = await ExpenseRequestRepository.create({
      data: {
        employeeId: expenseRequest.employeeId || 1,
        description: expenseRequest.description,
        amount: expenseRequest.amount,
        imageUrl: imageUrl,
      },
    });

    return newExpenseRequest;
  } catch (error) {
    console.error("Error creating expense request:", error);
    throw error;
  }
};

// Get all pending requests for manager
export const getPendingRequests = async () => {
  return await ExpenseRequestRepository.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      employee: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get request by ID
export const getRequestById = async (id) => {
  return await ExpenseRequestRepository.findUnique({
    where: { id: parseInt(id) },
    include: {
      employee: true,
      approvedBy: true,
    },
  });
};

// Manager approve request
export const approveRequest = async (requestId, managerId, comment) => {
  const updatedRequest = await ExpenseRequestRepository.update({
    where: { id: parseInt(requestId) },
    data: {
      status: "APPROVED",
      approvedById: parseInt(managerId),
      rejectedReason: comment, // Sử dụng rejectedReason cho comment
    },
    include: {
      employee: true,
      approvedBy: true,
    },
  });

  // Log the action
  await SystemLogRepository.create({
    data: {
      action: `Request approved by manager ID ${managerId}`,
      requestId: parseInt(requestId),
    },
  });

  return updatedRequest;
};

// Manager reject request
export const rejectRequest = async (requestId, managerId, comment) => {
  const updatedRequest = await ExpenseRequestRepository.update({
    where: { id: parseInt(requestId) },
    data: {
      status: "REJECTED",
      approvedById: parseInt(managerId),
      rejectedReason: comment,
    },
    include: {
      employee: true,
      approvedBy: true,
    },
  });

  // Log the action
  await SystemLogRepository.create({
    data: {
      action: `Request rejected by manager ID ${managerId}`,
      requestId: parseInt(requestId),
    },
  });

  return updatedRequest;
};

// Get employee's own requests
export const getEmployeeRequests = async (employeeId) => {
  return await ExpenseRequestRepository.findMany({
    where: {
      employeeId: parseInt(employeeId),
    },
    include: {
      employee: true,
      approvedBy: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Update expense request (only for PENDING status)
export const updateExpenseRequest = async (
  requestId,
  employeeId,
  updateData
) => {
  // Check if request exists and belongs to employee
  const existingRequest = await ExpenseRequestRepository.findFirst({
    where: {
      id: parseInt(requestId),
      employeeId: parseInt(employeeId),
      status: "WRAPPED",
    },
  });

  if (!existingRequest) {
    throw new Error("Request not found or cannot be edited");
  }

  // Handle image upload if new image provided
  let imageUrl = existingRequest.imageUrl;
  if (updateData.image) {
    const result = await cloudinary.uploader.upload(updateData.image, {
      folder: "expense-requests",
    });
    imageUrl = result.secure_url;
  }

  const updatedRequest = await ExpenseRequestRepository.update({
    where: { id: parseInt(requestId) },
    data: {
      description: updateData.description || existingRequest.description,
      amount: updateData.amount || existingRequest.amount,
      imageUrl: imageUrl,
    },
    include: {
      employee: true,
    },
  });

  // Log the action
  await SystemLogRepository.create({
    data: {
      action: `Request updated by employee ID ${employeeId}`,
      requestId: parseInt(requestId),
    },
  });

  return updatedRequest;
};

// Delete expense request (only for PENDING status)
export const deleteExpenseRequest = async (requestId, employeeId) => {
  // Check if request exists and belongs to employee
  const existingRequest = await ExpenseRequestRepository.findFirst({
    where: {
      id: parseInt(requestId),
      employeeId: parseInt(employeeId),
      status: "WRAPPED",
    },
  });

  if (!existingRequest) {
    throw new Error("Request not found or cannot be deleted");
  }

  // Delete related system logs first
  await SystemLogRepository.deleteMany({
    where: {
      requestId: parseInt(requestId),
    },
  });

  // Then delete the request
  const deletedRequest = await ExpenseRequestRepository.delete({
    where: { id: parseInt(requestId) },
  });

  return deletedRequest;
};

// Get requests by status
export const getRequestsByStatus = async (status) => {
  return await ExpenseRequestRepository.findMany({
    where: { status },

    orderBy: { createdAt: "desc" },
  });
};
export const changeStatusRequest = async (
  idFinance,
  idExpenseRequest,
  changeStatus,
  rejectedReason
) => {
  try {
    const updateData = {
      status: changeStatus,
    };

    // This condition checks if the status is NEITHER FINAL_APPROVED NOR REJECTED
    if (
      updateData.status !== "FINAL_APPROVED" &&
      updateData.status !== "REJECTED"
    ) {
      throw new Error(
        "Invalid status. Only 'FINAL_APPROVED' and 'REJECTED' are allowed for finance approval."
      );
    }

    if (updateData.status === "REJECTED") {
      // Only set rejectedReason if the status is REJECTED
      updateData.rejectedReason = rejectedReason;
    } else {
      // Ensure rejectedReason is not set if not rejected, or explicitly set to null/undefined
      updateData.rejectedReason = null;
    }

    updateData.finalApprovedById = idFinance;

    const updatedRequest = await ExpenseRequestRepository.update({
      where: {
        id: idExpenseRequest,
      },
      data: updateData,
    });

    const action = `Finance ${updateData.status}`;
    // Assuming 'requestId' comes from somewhere, maybe 'idExpenseRequest'
    await SystemLogRepository.create({
      data: {
        action: action,
        requestId: idExpenseRequest, // Using idExpenseRequest as requestId
      },
    });

    return updatedRequest;
  } catch (error) {
    console.error("Error updating expense request:", error.message); // Log the error message
    throw error; // Re-throw the original error
  }
};

// Get all requests from manager's team (same department)
export const getTeamRequests = async (managerId) => {
  // Kiểm tra manager có tồn tại không
  const manager = await EmployeeRepository.findUnique({
    where: { id: parseInt(managerId) },
  });

  if (!manager || manager.role !== "MANAGER") {
    throw new Error("Manager not found or insufficient permissions");
  }

  // Lấy tất cả requests mà manager này đã approve
  return await ExpenseRequestRepository.findMany({
    where: {
      approvedById: parseInt(managerId),
    },
    include: {
      employee: true,
      approvedBy: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updateExpenseRequestStatus = async (requestId, status) => {
  return await ExpenseRequestRepository.update({
    where: { id: parseInt(requestId) },
    data: { status },
  });
};

// Filter team requests by employee name, date, or status
export const filterTeamRequests = async (managerId, filters) => {
  const manager = await EmployeeRepository.findUnique({
    where: { id: parseInt(managerId) },
  });

  if (!manager || manager.role !== "MANAGER") {
    throw new Error("Manager not found or insufficient permissions");
  }

  // Build dynamic where clause - lấy requests có approvedById là managerId
  const whereClause = {
    approvedById: parseInt(managerId),
  };

  // Handle status filter
  if (filters.status) {
    const validStatuses = ["APPROVED", "REJECTED", "FINAL_APPROVED"];
    if (validStatuses.includes(filters.status)) {
      whereClause.status = filters.status;
    } else {
      // Nếu status không hợp lệ, trả về empty array
      return [];
    }
  } else {
    // Nếu không có status filter, chỉ lấy các requests đã được approve/reject
    whereClause.status = {
      in: ["APPROVED", "REJECTED", "FINAL_APPROVED"],
    };
  }

  // Add date range filter
  if (filters.startDate || filters.endDate) {
    whereClause.createdAt = {};
    if (filters.startDate) {
      whereClause.createdAt.gte = new Date(filters.startDate);
    }
    if (filters.endDate) {
      whereClause.createdAt.lte = new Date(filters.endDate);
    }
  }

  // Thêm dòng này trước khi query database
  console.log("whereClause:", JSON.stringify(whereClause, null, 2));

  let requests = await ExpenseRequestRepository.findMany({
    where: whereClause,
    include: {
      employee: true,
      approvedBy: true,
      finalApprovedBy: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Filter by employee name if provided (sau khi lấy data từ DB)
  if (filters.employee_name) {
    requests = requests.filter((request) =>
      request.employee.name
        .toLowerCase()
        .includes(filters.employee_name.toLowerCase())
    );
  }

  return requests;
};

// Export final approved requests for finance officer
export const exportFinalApprovedRequests = async (financeId, filters) => {
  // Verify finance officer exists and has correct role
  const financeOfficer = await EmployeeRepository.findUnique({
    where: { id: parseInt(financeId) },
  });

  if (!financeOfficer || financeOfficer.role !== "FINANCE") {
    throw new Error("Finance officer not found or insufficient permissions");
  }

  const whereClause = {
    status: "FINAL_APPROVED",
    finalApprovedById: parseInt(financeId),
  };

  // Add date range filter
  if (filters.startDate || filters.endDate) {
    whereClause.createdAt = {};
    if (filters.startDate) {
      whereClause.createdAt.gte = new Date(filters.startDate);
    }
    if (filters.endDate) {
      whereClause.createdAt.lte = new Date(filters.endDate);
    }
  }

  return await ExpenseRequestRepository.findMany({
    where: whereClause,
    include: {
      employee: {
        select: {
          id: true,
          name: true,
          department: true,
        },
      },
      approvedBy: {
        select: {
          id: true,
          name: true,
        },
      },
      finalApprovedBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
// Tổng chi tiêu theo nhân viên
export const getTotalSpentPerEmployee = async () => {
  return await ExpenseRequestRepository.groupBy({
    by: ["employeeId"],
    _sum: {
      amount: true,
    },
    orderBy: {
      _sum: {
        amount: "desc",
      },
    },
  });
};

// Tổng chi tiêu theo phòng ban
export const getTotalSpentPerDepartment = async () => {
  const data = await ExpenseRequestRepository.findMany({
    select: {
      amount: true,
      employee: {
        select: {
          department: true,
        },
      },
    },
  });

  // Group dữ liệu trong JS
  const departmentSummary = {};

  data.forEach((item) => {
    const dept = item.employee?.department || "Unknown";
    if (!departmentSummary[dept]) {
      departmentSummary[dept] = 0;
    }
    departmentSummary[dept] += item.amount;
  });

  const result = Object.entries(departmentSummary)
    .map(([department, total]) => ({ department, total }))
    .sort((a, b) => b.total - a.total);

  return result;
};
