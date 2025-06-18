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

export const getRequestsByEmployeeId = async (employeeId) => {
  return await ExpenseRequestRepository.findMany({
    where: { employeeId },
    orderBy: { createdAt: "desc" },
  });
};
