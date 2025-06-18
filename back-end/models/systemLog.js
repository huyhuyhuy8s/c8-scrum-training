import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();
const SystemLogRepository = prisma.systemLog;

export default SystemLogRepository;
