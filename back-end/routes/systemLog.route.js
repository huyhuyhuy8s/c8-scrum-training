import { Router } from "express";

import {getNotificationsForAllRequestController, getNotificationsForAllSubmitController} from '../controllers/systemLog.controller.js'

const router = Router();

router.get("/allSubmit",getNotificationsForAllSubmitController)

router.get("/:idEmployee", getNotificationsForAllRequestController);


export default router;

