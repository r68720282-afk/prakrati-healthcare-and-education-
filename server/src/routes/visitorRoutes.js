import express from "express";
import {
  trackVisitor,
  getVisitorStats,
} from "../controllers/visitorController.js";

const router = express.Router();

// Public - har visitor ko track karega
router.post("/track", trackVisitor);

// Public - total visitor count return karega
router.get("/stats", getVisitorStats);

export default router;
