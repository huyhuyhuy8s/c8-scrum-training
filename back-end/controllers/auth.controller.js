import { logoutUser } from "../services/authService.service.js";

export const logoutController = async (req, res) => {
  try {
    // Lấy thông tin user từ token (req.user được middleware gắn vào sau khi verify token)
    const employeeId = req.user?.id;

    if (!employeeId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No valid token provided",
      });
    }

    // Gọi service logout
    const result = await logoutUser(employeeId);

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
