import e from "express";
import {
  createExpenseRequest,
  getRequestsByEmployeeId,
} from "../services/expenseRequest.service.js";

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

export const getEmployeeRequests = async (req, res) => {
  try {
    let employeeId = req.params.employeeId || 0;
    employeeId = parseInt(employeeId);

    const requests = await getRequestsByEmployeeId(employeeId);
    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
