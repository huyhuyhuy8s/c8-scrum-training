import express from "express";
import cors from "cors";
import { config } from "dotenv";
import expenseRequestRoute from "./routes/expenseRequest.route.js";

import systemLogRoute from "./routes/systemLog.route.js"
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


app.use("/api/system-logs",systemLogRoute)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
