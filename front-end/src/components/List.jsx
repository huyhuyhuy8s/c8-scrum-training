import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  getAllExpenses,
  updateExpenseStatus,
  deleteExpense,
} from "../services/expenseService";
import { getCurrentUser } from "../services/authService";
import { FiSend, FiTrash2 } from "react-icons/fi";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";
import SearchInput from "./SearchInput";
import ExpenseDetailModal from "./ExpenseDetailModal";
import { sampleExpenseData } from "../data/sampleData";

/**
 * List component for displaying filtered expense data
 * @param {string} title - The list title
 * @param {Array} data - External data to display
 * @param {Object} filters - Active filters to apply
 * @param {Function} onFilteredDataChange - Callback when filtered data changes
 * @param {Function} onCompleteDataChange - Callback when complete data changes
 * @param {Function} onFilterChange - Callback when filters change
 * @param {Function} onClearFilters - Callback to clear all filters
 */
const List = ({
  title = "Recent Activities",
  data = [],
  filters = {},
  onFilteredDataChange,
  onCompleteDataChange,
  onFilterChange,
  onClearFilters,
}) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [sortConfig, setSortConfig] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("employee");
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const currentUser = getCurrentUser();

  // Format date for display - similar to ExpenseDetailModal
  const formatDate = useCallback((dateString) => {
    if (!dateString) return "N/A";

    try {
      // Handle different date formats
      let date;

      // Check if it's already a Date object
      if (dateString instanceof Date) {
        date = dateString;
      } else {
        // Parse string date - handle ISO format, yyyy-mm-dd, etc.
        date = new Date(dateString);
      }

      // Check if date is valid
      if (isNaN(date.getTime())) {
        // Try alternative parsing for dd/mm/yyyy or mm/dd/yyyy
        const parts = dateString.toString().split(/[-/]/);
        if (parts.length === 3) {
          // Assume yyyy-mm-dd or yyyy/mm/dd format
          date = new Date(parts[0], parts[1] - 1, parts[2]);
          if (isNaN(date.getTime())) {
            return dateString; // Return original if still can't parse
          }
        } else {
          return dateString; // Return original if can't parse
        }
      }

      // Format as readable date (shorter format for list display)
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC", // Prevent timezone issues
      });
    } catch (error) {
      console.warn("Date formatting error:", error);
      return dateString; // Return original if error
    }
  }, []);

  // Debounced fetch when filters or searchQuery change
  useEffect(() => {
    const handler = setTimeout(() => {
      const fetchExpenses = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await getAllExpenses();
          setExpenses(response);
        } catch (err) {
          console.error("Error fetching expenses:", err);
          setError("Failed to load expenses");
          setExpenses([]);
        } finally {
          setLoading(false);
        }
      };
      fetchExpenses();
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [filters, searchQuery]);

  // Helper to format status
  const formatStatus = (status) => {
    switch (status) {
      case "FINAL_APPROVED":
        return "Final Approved";
      case "WRAPPED":
        return "Wrapped";
      case "PENDING":
        return "Pending";
      case "REJECTED":
        return "Rejected";
      case "APPROVED":
        return "Approved";
      default:
        return status;
    }
  };

  // Update transformExpenseToDisplay to include manager and image
  const transformExpenseToDisplay = useCallback(
    (expense) => {
      return {
        id: expense.id,
        employeeId: expense.employeeId,
        date: formatDate(
          expense.expenseDate || expense.createdAt || expense.date
        ),
        employee: {
          name: expense.employee?.name || "Current User",
          department: expense.employee?.department || "Unknown",
          email: expense.employee?.email || "",
        },
        manager: expense.approvedBy?.name || "-",
        managerDept: expense.approvedBy?.department || "-",
        amount: `$${parseFloat(expense.amount).toFixed(2)}`,
        status: expense.status || "pending",
        statusText: formatStatus(expense.status),
        imageUrl: expense.imageUrl,
        description: expense.description || "",
      };
    },
    [formatDate]
  );

  // Enhanced filter data with search and custom date range support
  const applyFilters = useCallback(
    (dataToFilter) => {
      let filteredData = dataToFilter;

      // Apply search filter first
      if (searchQuery && searchQuery.trim() !== "") {
        const searchLower = searchQuery.toLowerCase().trim();
        filteredData = filteredData.filter((item) => {
          switch (searchCriteria) {
            case "employee":
              return item.employee?.name?.toLowerCase().includes(searchLower);
            case "department":
              return item.employee?.department
                ?.toLowerCase()
                .includes(searchLower);
            case "description":
              return item.description?.toLowerCase().includes(searchLower);
            case "category":
              return item.category?.toLowerCase().includes(searchLower);
            case "amount":
              return item.amount
                ?.toString()
                .toLowerCase()
                .includes(searchLower);
            case "all":
              return (
                item.employee?.name?.toLowerCase().includes(searchLower) ||
                item.employee?.department
                  ?.toLowerCase()
                  .includes(searchLower) ||
                item.description?.toLowerCase().includes(searchLower) ||
                item.category?.toLowerCase().includes(searchLower) ||
                item.amount?.toString().toLowerCase().includes(searchLower) ||
                item.status?.toLowerCase().includes(searchLower)
              );
            default:
              return item.employee?.name?.toLowerCase().includes(searchLower);
          }
        });
      }

      // Apply other filters
      if (!filters || Object.keys(filters).length === 0) {
        return filteredData;
      }

      return filteredData.filter((item) => {
        // Status filter
        if (filters.status && filters.status !== "") {
          const itemStatus = item.status.toUpperCase();
          const filterStatus = filters.status.toLowerCase();

          // Custom status mappings
          if (filterStatus === "draft") {
            // Show WRAPPED
            if (itemStatus !== "WRAPPED") return false;
          } else if (filterStatus === "pending") {
            // Show only PENDING
            if (itemStatus !== "PENDING") return false;
          } else if (filterStatus === "approved") {
            // Show only APPROVED
            if (itemStatus !== "APPROVED") return false;
          } else if (filterStatus === "final_approved") {
            // Show only FINAL_APPROVED
            if (itemStatus !== "FINAL_APPROVED") return false;
          } else if (filterStatus === "rejected") {
            if (itemStatus !== "REJECTED") return false;
          }
        }

        // Department filter
        if (filters.department && filters.department !== "") {
          if (
            item.employee.department.toLowerCase() !==
            filters.department.toLowerCase()
          ) {
            return false;
          }
        }

        // Date range filter
        if (filters.startDate || filters.endDate) {
          const itemDate = new Date(item.date);

          // Start date filter
          if (filters.startDate) {
            const startDate = new Date(filters.startDate);
            if (itemDate < startDate) return false;
          }

          // End date filter
          if (filters.endDate) {
            const endDate = new Date(filters.endDate);
            endDate.setHours(23, 59, 59, 999); // Include the entire end date
            if (itemDate > endDate) return false;
          }
        }
        return true;
      });
    },
    [searchQuery, searchCriteria, filters]
  );

  // Handle sending expense to pending status
  const handleSendToPending = async (expenseId, e) => {
    e.stopPropagation(); // Prevent row click
    setActionLoading((prev) => ({ ...prev, [`pending_${expenseId}`]: true }));

    try {
      await updateExpenseStatus(expenseId, "pending");
      // Refresh the list
      const response = await getAllExpenses();
      setExpenses(response);
    } catch (err) {
      console.error("Error updating expense status:", err);
      setError("Failed to update expense status");
    } finally {
      setActionLoading((prev) => ({
        ...prev,
        [`pending_${expenseId}`]: false,
      }));
    }
  };

  // Handle deleting expense
  const handleDeleteExpense = async (expenseId, e, employeeId) => {
    e.stopPropagation(); // Prevent row click

    if (!expenseId || !employeeId) {
      alert("Cannot delete: missing expense or employee ID.");
      return;
    }

    if (
      !window.confirm(
        "Are you sure you want to delete this expense? This action cannot be undone."
      )
    ) {
      return;
    }

    setActionLoading((prev) => ({ ...prev, [`delete_${expenseId}`]: true }));

    try {
      await deleteExpense(expenseId, employeeId);
      // Refresh the list
      const response = await getAllExpenses();
      setExpenses(response);
    } catch (err) {
      console.error("Error deleting expense:", err);
      setError("Failed to delete expense");
    } finally {
      setActionLoading((prev) => ({ ...prev, [`delete_${expenseId}`]: false }));
    }
  };

  // Check if user is employee and can perform actions
  const canPerformActions = currentUser?.role === "employee";

  // Apply sorting to data
  const applySorting = useCallback(
    (dataToSort) => {
      if (!sortConfig.field || !sortConfig.direction) {
        return dataToSort;
      }

      return [...dataToSort].sort((a, b) => {
        let aValue, bValue;

        switch (sortConfig.field) {
          case "date":
            aValue = new Date(a.date);
            bValue = new Date(b.date);
            if (sortConfig.direction === "newest") {
              return bValue - aValue;
            } else {
              return aValue - bValue;
            }

          case "employee":
            aValue = a.employee?.name?.toLowerCase() || "";
            bValue = b.employee?.name?.toLowerCase() || "";
            break;

          case "department":
            aValue = a.employee?.department?.toLowerCase() || "";
            bValue = b.employee?.department?.toLowerCase() || "";
            break;

          case "amount":
            // Remove $ and commas, then parse as float
            aValue = parseFloat(a.amount.replace(/[$,]/g, "")) || 0;
            bValue = parseFloat(b.amount.replace(/[$,]/g, "")) || 0;
            if (sortConfig.direction === "highest") {
              return bValue - aValue;
            } else {
              return aValue - bValue;
            }

          case "status":
            if (sortConfig.direction === "priority") {
              // Sort by priority: draft, pending, approved, rejected
              const statusPriority = {
                draft: 0,
                pending: 1,
                approved: 2,
                rejected: 3,
              };
              aValue = statusPriority[a.status?.toLowerCase()] ?? 999;
              bValue = statusPriority[b.status?.toLowerCase()] ?? 999;
              return aValue - bValue;
            } else {
              // Alphabetical sorting
              aValue = a.status?.toLowerCase() || "";
              bValue = b.status?.toLowerCase() || "";
            }
            break;

          default:
            return 0;
        }

        // For string comparisons
        if (typeof aValue === "string" && typeof bValue === "string") {
          if (sortConfig.direction === "desc") {
            return bValue.localeCompare(aValue);
          } else {
            return aValue.localeCompare(bValue);
          }
        }

        return 0;
      });
    },
    [sortConfig]
  );

  // Handle sort change
  const handleSortChange = (newSortConfig) => {
    setSortConfig(newSortConfig);
  };

  // Handle search change
  const handleSearchChange = (query, criteria) => {
    setSearchQuery(query);
    if (criteria !== undefined) {
      setSearchCriteria(criteria);
    }
  };

  // Handle search criteria change
  const handleSearchCriteriaChange = (criteria) => {
    setSearchCriteria(criteria);
  };

  // Handle item click to show detail modal
  const handleItemClick = (item) => {
    setSelectedExpense(item);
    setShowDetailModal(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setShowDetailModal(false);
    setSelectedExpense(null);
  };

  // Handle modal update (refresh data)
  const handleModalUpdate = async () => {
    try {
      const response = await getAllExpenses();
      setExpenses(response);
    } catch (err) {
      console.error("Error refreshing expenses:", err);
    }
  };

  // Memoize displayData to prevent unnecessary re-renders
  const displayData = useMemo(() => {
    if (data.length > 0) {
      return data;
    } else if (loading) {
      return []; // Show empty while loading
    } else if (error || expenses.length === 0) {
      return sampleExpenseData; // Fallback to sample data
    } else {
      // Only transform if expenses actually changed
      return expenses.map(transformExpenseToDisplay);
    }
  }, [data, loading, error, expenses, transformExpenseToDisplay]);

  // Memoize filtered data to prevent unnecessary re-renders
  const filteredData = useMemo(() => {
    return applyFilters(displayData);
  }, [displayData, applyFilters]);

  // Memoize sorted and filtered data to prevent unnecessary re-renders
  const sortedAndFilteredData = useMemo(() => {
    return applySorting(filteredData);
  }, [filteredData, applySorting]);

  // Notify parent component when filtered data changes
  useEffect(() => {
    if (onFilteredDataChange) {
      onFilteredDataChange(sortedAndFilteredData);
    }
  }, [sortedAndFilteredData, onFilteredDataChange]);

  // Notify parent component when complete data changes
  useEffect(() => {
    if (onCompleteDataChange) {
      onCompleteDataChange(displayData);
    }
  }, [displayData, onCompleteDataChange]);

  // Transform list item to expense format for editing
  const transformItemToExpense = (item) => {
    return {
      id: item.id,
      date: item.date, // Keep original date field for ExpenseDetailModal
      expenseDate: item.date, // Also provide expenseDate for compatibility
      amount: item.amount.replace("$", "").replace(",", ""), // Remove $ and commas
      description: `${item.description}`,
      category: item.employee.department, // Use department as category
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
      case "draft":
        return "draft";
      default:
        return "draft";
    }
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="list-header-left">
          <span className="list-icon">📊</span>
          <h2 className="list-title">{title}</h2>
          {loading && <span className="loading-indicator">Loading...</span>}
          {error && <span className="error-indicator">{error}</span>}
        </div>{" "}
        <div className="list-header-right">
          {" "}
          <SearchInput
            onSearchChange={handleSearchChange}
            value={searchQuery}
            searchCriteria={searchCriteria}
            onSearchCriteriaChange={handleSearchCriteriaChange}
          />
          <SortButton
            onSortChange={handleSortChange}
            currentSort={sortConfig}
          />
          <FilterButton
            onFilterChange={onFilterChange}
            currentFilters={filters}
            onClearFilters={onClearFilters}
          />{" "}
        </div>{" "}
      </div>

      <table className="list-table">
        <thead className="list-table-header">
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.length === 0 && loading ? (
            <tr>
              <td
                colSpan={canPerformActions ? "6" : "5"}
                className="list-table-cell text-center"
              >
                Loading expenses...
              </td>
            </tr>
          ) : sortedAndFilteredData.length === 0 ? (
            <tr>
              <td
                colSpan={canPerformActions ? "6" : "5"}
                className="list-table-cell text-center"
              >
                {" "}
                {displayData.length === 0
                  ? "No expenses found"
                  : "No expenses match the current filters"}
              </td>
            </tr>
          ) : (
            sortedAndFilteredData.map((item) => (
              <tr
                key={item.id}
                className="list-table-row clickable"
                onClick={() => handleItemClick(transformItemToExpense(item))}
                role="button"
                tabIndex={0}
                aria-label={`View expense details for ${item.employee.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleItemClick(transformItemToExpense(item));
                  }
                }}
              >
                <td className="list-table-cell">
                  <span className="list-date">{item.date}</span>
                </td>
                <td className="list-table-cell">
                  <div className="list-employee-name">{item.employee.name}</div>
                </td>
                <td className="list-table-cell">{item.description}</td>
                <td className="list-table-cell">
                  <span className="list-amount">{item.amount}</span>
                </td>
                <td className="list-table-cell">
                  <span
                    className={`list-status ${getStatusClass(item.status)}`}
                  >
                    {item.statusText}
                  </span>
                </td>
                <td className="list-table-cell">
                  {canPerformActions && (
                    <div className="list-actions">
                      <button
                        className={`action-btn send-btn ${
                          item.status?.toLowerCase() !== "wrapped"
                            ? "disabled"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.status?.toLowerCase() === "wrapped")
                            handleSendToPending(item.id, e);
                        }}
                        disabled={
                          item.status?.toLowerCase() !== "wrapped" ||
                          actionLoading[`pending_${item.id}`]
                        }
                        title={
                          item.status?.toLowerCase() === "wrapped"
                            ? "Send to Pending"
                            : "Action not available"
                        }
                        aria-label={
                          item.status?.toLowerCase() === "wrapped"
                            ? "Send expense to pending approval"
                            : "Action not available for this status"
                        }
                      >
                        {actionLoading[`pending_${item.id}`] ? (
                          <span className="action-loading">...</span>
                        ) : (
                          <FiSend />
                        )}
                      </button>
                      <button
                        className={`action-btn delete-btn ${
                          item.status?.toLowerCase() !== "wrapped"
                            ? "disabled"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.status?.toLowerCase() === "wrapped")
                            handleDeleteExpense(item.id, e, item.employeeId);
                        }}
                        disabled={
                          item.status?.toLowerCase() !== "wrapped" ||
                          actionLoading[`delete_${item.id}`]
                        }
                        title={
                          item.status?.toLowerCase() === "wrapped"
                            ? "Delete Expense"
                            : "Action not available"
                        }
                        aria-label={
                          item.status?.toLowerCase() === "wrapped"
                            ? "Delete this expense"
                            : "Action not available for this status"
                        }
                      >
                        {actionLoading[`delete_${item.id}`] ? (
                          <span className="action-loading">...</span>
                        ) : (
                          <FiTrash2 />
                        )}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Expense Detail Modal */}
      <ExpenseDetailModal
        expense={selectedExpense}
        isOpen={showDetailModal}
        onClose={handleModalClose}
        onUpdate={handleModalUpdate}
      />
    </div>
  );
};

export default List;
