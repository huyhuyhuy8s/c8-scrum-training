import "./App.css";
import AddExpense from "./components/AddExpense";
import MainLayout from "./components/EmployeeLayout";
import ManagerLayout from "./components/ManagerLayout";
import FinanceLayout from "./components/FinanceLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/manager" element={<ManagerLayout />} />
        <Route path="/finance" element={<FinanceLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
