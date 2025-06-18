import { Router } from "express";
import { logoutController } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();
router.post("/logout", authMiddleware, logoutController);
export default router;
