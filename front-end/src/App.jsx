import "./App.css";
import AddExpense from "./components/AddExpense";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
