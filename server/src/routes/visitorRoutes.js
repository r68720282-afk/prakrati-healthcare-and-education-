import express from "express";
import {
  trackVisitor,
  getVisitorStats,
} from "../controllers/visitorController.js";
router.get("/stats", getVisitorStats);

const router = express.Router();

// Public: Har visitor ko track karega
router.post("/track", trackVisitor);

// Admin: Visitor statistics dekhega
router.get("/stats", protectAdmin, getVisitorStats);

export default router;
