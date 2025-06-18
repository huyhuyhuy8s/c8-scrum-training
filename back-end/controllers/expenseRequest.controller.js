import { createExpenseRequest } from "../services/expenseRequest.service.js";

export const createExpenseRequestController = async (req, res) => {
  try {
    const expenseRequest = req.body;
    const newExpenseRequest = await createExpenseRequest(expenseRequest);
    console.log(newExpenseRequest);
    res.status(201).json(newExpenseRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
