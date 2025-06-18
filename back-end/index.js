import express from "express";
import cors from "cors";
import expenseRequestRoute from "./routes/expenseRequest.route.js";

const app = express();

app.use("/api/expense-requests", expenseRequestRoute);
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



