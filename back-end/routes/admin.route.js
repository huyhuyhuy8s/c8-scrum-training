import { Router } from "express";

import {createEmployee, updateEmployee} from '../controllers/admin.controller.js'

const router = Router();

router.post("/create-employee",createEmployee)

router.patch("/update-employee/:idEmployee", updateEmployee)


export default router;

