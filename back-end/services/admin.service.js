import EmployeeRepository from "../models/employee.js";

export const createNewEmployee = async (
  name,
  department,
  role,
  email,
  password
) => {
  try {
    const newEmployee = await EmployeeRepository.create({
      data: {
        name: name,
        department: department,
        role: role,
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        department: true,
        role: true,
        email: true,
      },
    });
    return newEmployee;
  } catch (error) {
    console.error(
      `Error create new employee for employee`,
      error
    );
    throw new Error();
  }
};
