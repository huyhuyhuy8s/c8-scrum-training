import React, { useState, useEffect } from "react";
import { getAllExpenses } from "../services/expenseService";

const List = ({ title = "Recent Activities", data = [], onItemClick }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Sample data if no data is provided
  const sampleData = [
    {
      id: 1,
      date: "2025-06-15",
      employee: {
        name: "John Smith",
        department: "IT",
      },
      category: "Transportation",
      amount: "$500.00",
      status: "pending",
      statusText: "Pending Manager",
    },
    {
      id: 2,
      date: "2025-06-14",
      employee: {
        name: "Sarah Johnson",
        department: "Marketing",
      },
      category: "Meals",
      amount: "$75.50",
      status: "approved",
      statusText: "Approved",
    },
    {
      id: 3,
      date: "2025-06-13",
      employee: {
        name: "Mike Wilson",
        department: "Sales",
      },
      category: "Accommodation",
      amount: "$320.00",
      status: "rejected",
      statusText: "Rejected",
    },
    {
      id: 4,
      date: "2025-06-12",
      employee: {
        name: "Emily Davis",
        department: "HR",
      },
      category: "Office Supplies",
      amount: "$150.25",
      status: "approved",
      statusText: "Approved",
    },
    {
      id: 5,
      date: "2025-06-11",
      employee: {
        name: "David Brown",
        department: "Finance",
      },
      category: "Transportation",
      amount: "$890.00",
      status: "pending",
      statusText: "Pending Manager",
    },
    {
      id: 6,
      date: "2025-06-10",
      employee: {
        name: "Lisa Anderson",
        department: "IT",
      },
      category: "Software License",
      amount: "$1,200.00",
      status: "approved",
      statusText: "Approved",
    },
    {
      id: 7,
      date: "2025-06-09",
      employee: {
        name: "Robert Taylor",
        department: "Operations",
      },
      category: "Equipment",
      amount: "$450.75",
      status: "pending",
      statusText: "Pending Manager",
    },
    {
      id: 8,
      date: "2025-06-08",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing",
      },
      category: "Advertising",
      amount: "$2,500.00",
      status: "approved",
      statusText: "Approved",
    },
  ];

  // Fetch expenses from the API
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllExpenses();
        setExpenses(response);
      } catch (err) {
        console.error("Error fetching expenses:", err);
        setError("Failed to load expenses");
        // Fall back to sample data if API fails
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Transform API expense data to display format
  const transformExpenseToDisplay = (expense) => {
    // Format the date from createdAt
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    // Format employee name properly
    const formatEmployeeName = (employee) => {
      if (!employee || !employee.name) return "Unknown Employee";
      return employee.name;
    };

    return {
      id: expense.id,
      date: formatDate(expense.createdAt || expense.expenseDate),
      employee: {
        name: formatEmployeeName(expense.employee),
        department: expense.employee?.department || "Unknown",
      },
      category: expense.description || "General",
      amount: `$${parseFloat(expense.amount).toFixed(2)}`,
      status: expense.status?.toLowerCase() || "pending",
      statusText: expense.status
        ? expense.status.charAt(0).toUpperCase() +
          expense.status.slice(1).toLowerCase()
        : "Pending",
    };
  };

  // Use provided data, API data, or sample data
  let displayData;
  if (data.length > 0) {
    displayData = data;
  } else if (loading) {
    displayData = []; // Show empty while loading
  } else if (error || expenses.length === 0) {
    displayData = sampleData; // Fallback to sample data
  } else {
    displayData = expenses.map(transformExpenseToDisplay);
  }

  // Transform list item to expense format for editing
  const transformItemToExpense = (item) => {
    return {
      id: item.id,
      expenseDate: item.date,
      amount: item.amount.replace("$", "").replace(",", ""), // Remove $ and commas
      description: `${item.category} - ${item.employee.name} (${item.employee.department})`,
      category: item.category,
      employee: item.employee,
      status: item.status,
      originalItem: item, // Keep reference to original item
    };
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "pending";
      case "approved":
        return "approved";
      case "rejected":
        return "rejected";
      default:
        return "pending";
    }
  };
  return (
    <div className="list-container">
      <div className="list-header">
        <span className="list-icon">📊</span>
        <h2 className="list-title">{title}</h2>
        {loading && <span className="loading-indicator">Loading...</span>}
        {error && <span className="error-indicator">{error}</span>}
      </div>

      <table className="list-table">
        <thead className="list-table-header">
          {" "}
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>{" "}
        <tbody>
          {displayData.length === 0 && loading ? (
            <tr>
              <td colSpan="5" className="list-table-cell text-center">
                Loading expenses...
              </td>
            </tr>
          ) : displayData.length === 0 ? (
            <tr>
              <td colSpan="5" className="list-table-cell text-center">
                No expenses found
              </td>
            </tr>
          ) : (
            displayData.map((item) => (
              <tr
                key={item.id}
                className="list-table-row clickable"
                onClick={() => onItemClick?.(transformItemToExpense(item))}
                role="button"
                tabIndex={0}
                aria-label={`Edit expense for ${item.employee.name} - ${item.category}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onItemClick?.(transformItemToExpense(item));
                  }
                }}
              >
                <td className="list-table-cell">
                  <span className="list-date">{item.date}</span>
                </td>
                <td className="list-table-cell">
                  <div>
                    <div className="list-employee-name">
                      {item.employee.name}
                    </div>
                    <div className="list-employee-dept">
                      {item.employee.department}
                    </div>
                  </div>
                </td>
                <td className="list-table-cell">
                  <span className="list-category">{item.category}</span>
                </td>
                <td className="list-table-cell">
                  <span className="list-amount">{item.amount}</span>
                </td>
                <td className="list-table-cell">
                  <span
                    className={`list-status ${getStatusClass(item.status)}`}
                  >
                    {item.statusText}
                  </span>{" "}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
