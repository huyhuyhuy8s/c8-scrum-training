import "./App.css";
import AddExpense from "./components/AddExpense";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout userRole="manager" />} />
        <Route path="/employee" element={<MainLayout userRole="employee" />} />
      </Routes>
    </Router>
  );
}

export default App;
