import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
const SystemLogRepository = prisma.systemLog;

export default SystemLogRepository;
