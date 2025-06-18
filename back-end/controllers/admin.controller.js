import {
  createNewEmployee,
} from "../services/admin.service.js";

export const createEmployee = async (req, res) => {
  try {
    const { name, department, role, email, password } = req.body;
    const employee = await createNewEmployee(name, department, role, email, password)

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
