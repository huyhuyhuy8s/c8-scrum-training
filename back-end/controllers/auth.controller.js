import { logoutUser } from "../services/authService.service.js";

export const logoutController = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const id = parseInt(employeeId);

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid employee ID",
      });
    }

    const result = await logoutUser(id);

    res.status(200).json({
      success: true,
      message: "Logout successful",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error during logout",
      error: error.message,
    });
  }
};
