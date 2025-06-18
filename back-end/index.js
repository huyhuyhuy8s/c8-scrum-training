import express from "express";
import cors from "cors";
import { config } from "dotenv";
import expenseRequestRoute from "./routes/expenseRequest.route.js";

config();

const app = express();

// Fix: Middleware phải đặt trước routes
app.use(cors());
app.use(express.json());
app.use("/api/expense-requests", expenseRequestRoute);

// Routes
app.use("/api/expense-requests", expenseRequestRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
