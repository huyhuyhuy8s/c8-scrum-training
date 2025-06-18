import { Router } from "express";

import {getNotificationsForAllRequestController} from '../controllers/systemLog.controller.js'

const router = Router();


router.get("/:idEmployee", getNotificationsForAllRequestController);


export default router;

