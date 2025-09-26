import express from "express";
import userRoutes from "./routes/v1/user.routes.js";
import authRoutes from "./routes/v1/auth.routes.js";
import profileRoutes from "./routes/v1/profile.routes.js";

import { errorHandler } from "./middlewares/error.middleware.js";
import morgan from "morgan";

const app = express();

// Core middleware
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api/v1", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/v1", profileRoutes);

app.use(errorHandler);

export default app;
