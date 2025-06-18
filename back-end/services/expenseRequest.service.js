import ExpenseRequestRepository from "../models/expenseRequest.js";
import cloudinary from "../libs/cloudinary.js";
import SystemLogRepository from "../models/systemLog.js";
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
        employeeId: expenseRequest.employeeId,
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

export const getRequestsByEmployee = async (employeeId) => {
  return await ExpenseRequestRepository.findMany({
    where: { employeeId },
    select: {
      id: true,
      description: true,
      amount: true,
      status: true,
      createdAt: true,
      imageUrl: true,
      approvedBy: {
        select: { id: true, name: true },
      },
      finalApprovedBy: {
        select: { id: true, name: true },
      },
      logs: {
        select: { id: true, action: true, timestamp: true },
      },
    },
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
