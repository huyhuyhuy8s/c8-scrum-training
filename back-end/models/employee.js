import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const EmployeeRepository = prisma.employee;

export default EmployeeRepository;
