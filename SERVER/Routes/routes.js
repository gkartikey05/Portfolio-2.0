// Express routes for miscellaneous endpoints (contact, stats)
import { Router } from "express";
import contactUs from "../Controllers/contactUs.js";
const router = Router();

// Contact form endpoint
router.route("/contact").post(contactUs);

// Ping endpoint for keep-alive
router.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

export default router;
