import SystemLogRepository from "../models/systemLog.js";



export const getNotificationsForAllRequest = async (employeeId) => {
  try {
    const systemLogs = await SystemLogRepository.findMany({
      where: {
         request: {
          employeeId: employeeId,
          status: {
            not: "PENDING", // Exclude requests with PENDING status
          },
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
    console.error(`Error fetching system logs for employee ID ${employeeId}:`, error);
    throw new Error;
  }
}

export const getNotificationsForAllSubmit = async () => {
  try {
    const systemLogs = await SystemLogRepository.findMany({
      where: {
        request: {
          status: "PENDING", // Filter for requests with PENDING status
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
    console.error(`Error fetching pending system logs:`, error);
    throw new Error;
  }
}

