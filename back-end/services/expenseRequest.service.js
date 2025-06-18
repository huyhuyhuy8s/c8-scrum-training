import ExpenseRequestRepository from "../models/expenseRequest.js";
import cloudinary from "../libs/cloudinary.js";

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
        select: { id: true, name: true }
      },
      finalApprovedBy: {
        select: { id: true, name: true }
      },
      logs: {
        select: { id: true, action: true, timestamp: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
};
