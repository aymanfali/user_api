import express from "express";
import { getProfile } from "../../controllers/profile.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// All routes here are protected
router.get("/profile", authMiddleware, getProfile);

export default router;
