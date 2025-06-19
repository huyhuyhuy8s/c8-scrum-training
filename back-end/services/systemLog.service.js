import SystemLogRepository from "../models/systemLog.js";

export const getNotificationsForAllRequest = async (employeeId) => {
  try {
    const systemLogs = await SystemLogRepository.findMany({
      where: {
        request: {
          employeeId: employeeId,
          status: {
            not: "PENDING", // Loại trừ các yêu cầu có trạng thái PENDING
          },
        },
      },
      include: {
        request: {
          include: {
            employee: {
              // *** Đây là nơi bạn ẩn mật khẩu ***
              select: {
                id: true,
                name: true,
                department: true,
                role: true,
                email: true,
                // Không bao gồm 'password' ở đây
              },
              // Hoặc, nếu bạn đang dùng Prisma 5.0+ thì dùng cách này:
              // omit: {
              //   password: true,
              // },
            },
          },
        },
      },
    });
    return systemLogs;
  } catch (error) {
    console.error(
      `Error fetching system logs for employee ID ${employeeId}:`,
      error
    );
    throw new Error();
  }
};

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
            employee: {
              // Sử dụng 'select' để chỉ định các trường muốn lấy, loại trừ 'password'
              select: {
                id: true,
                name: true,
                department: true,
                role: true,
                email: true,
                // Không bao gồm 'password' ở đây
              },

            },
          },
        },
      },
    });
    return systemLogs;
  } catch (error) {
    console.error(`Error fetching pending system logs:`, error);
    throw new Error();
  }
};
