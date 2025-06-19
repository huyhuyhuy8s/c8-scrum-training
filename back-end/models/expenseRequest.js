import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
const ExpenseRequestRepository = prisma.expenseRequest;

export default ExpenseRequestRepository;
