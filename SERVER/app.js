// Main Express app setup for the Learning Management System backend
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import Routes from "./Routes/routes.js";

// Load environment variables from .env file
config();

const app = express();

// CORS configuration for frontend integration
app.use(
  cors({
    origin: "https://portfolio-20-kartikey-gupta.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// Parse JSON and URL-encoded data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Parse cookies from requests
app.use(cookieParser());

// Define root route to handle GET and HEAD requests (e.g., Render health checks)
app.head("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  return res.status(200).send("Portfolio Backend is running");
});

//* API routes for different modules
app.use("/api", Routes); // User authentication and profile routes

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
});

export default app;
