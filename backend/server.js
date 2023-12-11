import express from "express";
import connectToDatabase from "./config/databaseConnection.js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend server is running on port: http://localhost:${port}`);
});

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Server is running");
});


