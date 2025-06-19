import { Router } from "express";
import {
  logoutController,
  loginController,
} from "../controllers/auth.controller.js";

const router = Router();
router.post("/logout", logoutController);
router.post("/login", loginController);

export default router;
