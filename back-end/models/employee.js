import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const EmployeeRepository = prisma.employee;

export default EmployeeRepository;
