import express from "express";
import bodyParser from "body-parser";
import colors from "colors";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import goalRoutes from "./routes/goalRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Configurations
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

// App Middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use("/api/goals", goalRoutes);
app.use("/api/users", authRoutes);

// Express error handling middleware
app.use(errorHandler);

// Starting Server
app.listen(port, () => console.log(`Server started on port ${port}`));
