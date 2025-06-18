import ExpenseRequestRepository from "../models/expenseRequest.js";

export const createExpenseRequest = async (expenseRequest) => {
    const newExpenseRequest = await ExpenseRequestRepository.create({
        ...expenseRequest,
        status: "PENDING",
    });
    return newExpenseRequest;
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