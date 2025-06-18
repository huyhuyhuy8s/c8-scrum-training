import * as expenseService from "../services/expenseService.js";

export const getEmployeeRequests = async (req, res) => {
  try {
    const employeeId = req.user.id;
    const requests = await expenseService.getRequestsByEmployee(employeeId);
    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
