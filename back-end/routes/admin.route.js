import { Router } from "express";

import {createEmployee, updateEmployee, deleteEmployee} from '../controllers/admin.controller.js'

const router = Router();

router.post("/create-employee",createEmployee)

router.patch("/update-employee/:idEmployee", updateEmployee)

router.delete("/delete-employee/:idEmployee",deleteEmployee)

export default router;

