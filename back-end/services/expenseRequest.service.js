import ExpenseRequestRepository from "../models/expenseRequest.js";

export const createExpenseRequest = async (expenseRequest) => {
    const newExpenseRequest = await ExpenseRequestRepository.create({
        ...expenseRequest,
        status: "PENDING",
    });
    return newExpenseRequest;
};
