import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const expenseRequest = prisma.expenseRequest;

export default expenseRequest;
