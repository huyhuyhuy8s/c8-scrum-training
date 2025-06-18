import SystemLogRepository from "../models/systemLog.js";



export const getNotificationsForAllRequest = async (idEmployee) => {
  try {
    const systemLogs = await SystemLogRepository.findMany({
      where: {
        request: {
          employeeId: idEmployee,
        },
      },
      include: {
        request: {
          include: {
            employee: true, // Optionally include employee details for the request
          },
        },
      },
    });
    return systemLogs;
  } catch (error) {
    console.error(`Error fetching system logs for employee ID ${idEmployee}:`, error);
    throw new Error;
  }
}
