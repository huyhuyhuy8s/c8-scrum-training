import cloudinary from "../libs/cloudinary.js";
import SystemLogRepository from "../models/systemLog.js";

import ExpenseRequestRepository from "../models/expenseRequest.js";

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
        status: "PENDING",
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

  console.log("server1:");
  console.log(updatedRequest);
  // Log the action
  await SystemLogRepository.create({
    data: {
      action: `Request approved by manager ID ${managerId}`,
      requestId: parseInt(requestId),
    },
  });

  console.log("server2:");
  console.log(updatedRequest);

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

  console.log(updatedRequest);
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
      status: "PENDING",
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
      status: "PENDING",
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
