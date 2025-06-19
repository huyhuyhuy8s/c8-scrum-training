List API

Admin route:
http://localhost:3000/api/employees/create-employee
Tạo mới employee

http://localhost:3000/api/employees/update-employee/:idEmployee
Cập nhật thông tin employee

http://localhost:3000/api/employees/delete-employee/:idEmployee
Xóa employee theo ID

Auth route:
http://localhost:3000/api/auth/login
Đăng nhập

http://localhost:3000/api/auth/logout
Đăng xuất

Expenses request route:
http://localhost:3000/api/expense-requests/employee
Nhân viên gửi yêu cầu chi tiêu

http://localhost:3000/api/expense-requests/expense-requests-pending
Lấy các request có status = PENDING

http://localhost:3000/api/expense-requests/team/:managerId
Manager lọc những expense-request có approvedById = managerId

http://localhost:3000/api/expense-requests/detail-expense-requests-of-employee/:employeeId
Lấy những expense-request của 1 employee

http://localhost:3000/api/expense-requests/detail-expense-request-by-id/:id
Lấy 1 expense-request cụ thể dựa vào id của expense-request

http://localhost:3000/api/expense-requests/manager-approve/:id
Manager duyệt chấp nhận request dựa vào id của request

http://localhost:3000/api/expense-requests/manager-reject/:id
Manager từ chối request dựa vào id của request

http://localhost:3000/api/expense-requests/update-my-requests/:id
Employee cập nhật request của mình

http://localhost:3000/api/expense-requests/delete-my-requests/:id
Employee xóa request của mình

http://localhost:3000/api/expense-requests/finance/status/:status
Finance lọc request theo status

http://localhost:3000/api/expense-requests/:idFinance/:idExpenseRequest/:changeStatus
Finance cập nhật trạng thái request

http://localhost:3000/api/expense-requests/finance/:id/:status
Finance cập nhật trạng thái của 1 request

http://localhost:3000/api/expense-requests/employee/:id/:status
Employee cập nhật trạng thái

http://localhost:3000/api/expense-requests/team-by-filter/:managerId/filter
Manager lọc request theo tên NV, ngày, trạng thái

/api/expense-requests/finance/:financeId/export/final-approved
Finance export các request đã được duyệt cuối cùng

http://localhost:3000/api/expense-requests/summary/employee
Tổng tiền đã chi của từng employee

http://localhost:3000/api/expense-requests/summary/department
Tổng tiền đã chi của từng phòng ban

System log route:
http://localhost:3000/api/system-log/allSubmit
Lấy toàn bộ log về submit request

http://localhost:3000/api/system-log/:idEmployee
Lấy toàn bộ log liên quan đến một nhân viên
