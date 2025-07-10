// Express routes for miscellaneous endpoints (contact, stats)
import { Router } from "express";
import contactUs from "../Controllers/contactUs.js";
const router = Router();

// Contact form endpoint
router.route("/contact").post(contactUs);

export default router;
