import jwt from "jsonwebtoken";

export const generateToken = (employee) => {
  const token = jwt.sign({ id: employee.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};
