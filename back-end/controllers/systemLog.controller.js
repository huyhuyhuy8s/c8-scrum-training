import { getNotificationsForAllRequest } from "../services/systemLog.service.js";
export const getNotificationsForAllRequestController = async (req, res) => {
  try {
    const idEmployee = parseInt(req.params.idEmployee);
    const newNotifications = await getNotificationsForAllRequest(idEmployee);

    res.status(201).json(newNotifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
