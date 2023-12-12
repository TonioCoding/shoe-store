import express, {urlencoded} from "express";
import connectToDatabase from "./config/databaseConnection.js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js"

const app = express();
const port = process.env.PORT || 5000;

// Dependencies binding
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware binding
app.use(notFound);
app.use(errorHandler);

// Routes binding
app.use("/api/users", userRoutes);

// Main functionality
app.listen(port, () => {
  console.log(`Backend server is running on port: http://localhost:${port}`);
});
connectToDatabase();

// Root
app.get("/", (req, res) => {
  res.send("Server is running");
});
