import express from "express";
import cors from "cors";
import { config } from "dotenv";
import expenseRequestRoute from "./routes/expenseRequest.route.js";

import adminRoute from './routes/admin.route.js'
import systemLogRoute from "./routes/systemLog.route.js"
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

config();

const app = express();
app.use(cookieParser());

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


app.use("/api/admin", adminRoute)
app.use("/api/system-logs",systemLogRoute)

// Routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
