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
export const updateEmployeeById = async (
  idEmployee,
  data
) => {
  try {
    const updatedEmployee = await EmployeeRepository.update({
      where: {
        id: idEmployee,
      },
      data: {
        ...data, 
      },
      select: {
        id: true,
        name: true,
        department: true,
        role: true,
        email: true,
      },
    });
    return updatedEmployee;
  } catch (error) {
    console.error(
      `Error Update new employee for employee`,
      error
    );
    throw new Error();
  }
};

export const deleteEmployeeById = async (
  idEmployee
) => {
  try {
    const deletedEmployee = await EmployeeRepository.delete({
      where: {
        id: idEmployee,
      },
      select: {
        id: true,
      },
    });

    // If the delete operation completes without throwing an error,
    // it means a record was found and deleted.
    console.log(`Employee with ID ${deletedEmployee.id} deleted successfully.`);
    return true;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw new Error;
  } 
};
