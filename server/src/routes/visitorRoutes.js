import express from "express";
import {
  trackVisitor,
  getVisitorStats,
} from "../controllers/visitorController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public: Har visitor ko track karega
router.post("/track", trackVisitor);

// Admin: Visitor statistics dekhega
router.get("/stats", protectAdmin, getVisitorStats);

export default router;
