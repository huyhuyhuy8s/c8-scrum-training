---
applyTo: "**"
---

# VISION

We would like to have a tool to help finance department process expense requests from employees.
Employee can send expense requests for spending on work activities. E.g transportation, meals, stationary,...
Manager can confirm or reject the requests
Finance department can final approve then process payment or reject the request that is confirmed by employee's manager.

# ADDITIONAL TECHNICAL REQUIREMENTS

## FRONT-END

### Icons

All icon must be used via (React Icons)[https://react-icons.github.io/react-icons/]

### Typography

Font-family: Inter
Type scale: Perfect Fourth 1.333

### Color palette:

- primary: #2f27ce
- secondary: #dedcff
- accent: #433bff
- background: #fbfbfe
- text: #050315

### Folders tree:

All React components must be stored in /front-end/src/components/
All React components styles must be stored in /front-end/src/styles/ then import the styles onto /front-end/src/App.css
All React services must be stored in /front-end/src/services/

### API Calls

BaseUrl: `localhost:3000/api/`

Login: `auth/login`
Logout: `auth/logout`
Create User: `admin/create-employee/`
Update User: `admin/update-employee/`
Delete User: `admin/delete-employee/`

Create request: `expense-requests/employees/`
Get request: `expense-requests/employees/:employee-id`

Finance officer get sum amount per employee: `expense-requests/summary/employee`
Finance officer get sum amount per department: `expense-requests/summary/department`

Notifications for employee when Manager or Finance response (GET): `system-logs/:idEmployee`
All Notifications for managers when Employee submitted (PENDING) (GET): `system-logs/allSubmit`
above response json structure:
{
"id": 1,
"action": "Created request",
"timestamp": "2025-06-18T22:29:35.000Z",
"requestId": 1,
"request": {
"id": 1,
"employeeId": 1,
"description": "Uber to meeting",
"amount": 45,
"status": "FINAL_APPROVED",
"imageUrl": "https://res.cloudinary.com/demo/image/upload/v1/uber.jpg",
"createdAt": "2025-06-18T22:29:35.000Z",
"approvedById": 3,
"rejectedReason": null,
"finalApprovedById": 4,
"employee": {
"id": 1,
"name": "Alice Nguyen",
"department": "Engineering",
"role": "EMPLOYEE",
"email": "alice@example.com"
}
}
}

Finance Officer change expense request Status (PATCH): `expense-requests/:idFinance/:idExpenseRequest/:changeStatus`

### User-information

- name
- email
- password
- department
- role [EMPLOYEE, MANAGER, FINANCIAL OFFICER, ADMIN]

### Demo Accounts

Admin Account: admin@example.com / admin123 (IT Department)
Manager Account: manager@example.com / manager123 (Sales Department)
Employee Account: employee@example.com / employee123 (Marketing Department)
Financial Officer: finance@example.com / finance123 (Finance Department)

### Request status

Employee's view: [draft, pending, approved, rejected]
Manager's view: [pending, approved, rejected]
Financial Officer's view: [pending, final approved, rejected]

### Hashing password

Hashing password after created with bcrypt using salt 10 in register page

## BACK-END
