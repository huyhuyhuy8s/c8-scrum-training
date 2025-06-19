import EmployeeRepository from "../models/employee.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (email, password) => {
  const employee = await EmployeeRepository.findUnique({
    where: { email },
  });
  if (!employee) {
    console.log("Employee not found");
    throw new Error("Employee not found");
  }
  const result = await bcrypt.compare(password, employee.password);
  if (!result) {
    console.log("Invalid password");
    throw new Error("Invalid password");
  }
  return employee;
};

export const getEmployeeById = async (id) => {
  const employee = await EmployeeRepository.findUnique({
    where: { id },
  });
  const token = jwt.sign({ id: employee.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  employee.token = token;
  return employee;
};
