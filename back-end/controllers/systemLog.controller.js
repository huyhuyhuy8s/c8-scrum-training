import { getNotificationsForAllRequest, getNotificationsForAllSubmit } from "../services/systemLog.service.js";
export const getNotificationsForAllRequestController = async (req, res) => {
  try {
    const idEmployee = parseInt(req.params.idEmployee);
    const newNotificationsRequest = await getNotificationsForAllRequest(idEmployee);

    res.status(201).json(newNotificationsRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getNotificationsForAllSubmitController = async (req, res) => {
  try {
    const newNotificationsSubmit = await getNotificationsForAllSubmit();

    res.status(201).json(newNotificationsSubmit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};