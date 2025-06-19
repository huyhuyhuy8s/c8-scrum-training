import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import EmployeeLayout from "./components/EmployeeLayout";
import ManagerLayout from "./components/ManagerLayout";
import FinanceLayout from "./components/FinanceLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/manager" element={<ManagerLayout />} />
        <Route path="/finance" element={<FinanceLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
