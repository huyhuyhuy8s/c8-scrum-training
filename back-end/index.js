import express from "express";
import cors from "cors";
import { config } from "dotenv";
import expenseRequestRoute from "./routes/expenseRequest.route.js";
import authRoute from "./routes/auth.route.js";

config();

const app = express();

// Fix: Middleware phải đặt trước routes
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/expense-requests", expenseRequestRoute);
app.use("/api/auth", authRoute);

// Routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
