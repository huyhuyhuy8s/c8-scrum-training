import { authService } from "../services/authService.service.js";

export const logout = async (req, res) => {
  try {
    let employeeId = req.params.employeeId || 0;
    employeeId = parseInt(employeeId);

    const result = await authService.logoutUser(employeeId);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
