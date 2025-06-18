import { Router } from "express";

import {createEmployee} from '../controllers/admin.controller.js'

const router = Router();

router.post("/create-employee",createEmployee)



export default router;

