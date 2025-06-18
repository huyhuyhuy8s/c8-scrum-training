export const logoutUser = async (employeeId) => {
  // Ở đây bạn có thể xử lý thêm nếu lưu token vào DB (ví dụ xóa token trong DB hoặc thêm vào blacklist)
  // Vì bạn chưa dùng lưu token, nên chỉ trả thông báo thôi

  return {
    employeeId,
    message: "Logout successful"
  };
};
