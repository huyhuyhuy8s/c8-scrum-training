import React, { useState } from "react";
import {
  FiX,
  FiSend,
  FiTrash2,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiTag,
  FiEdit3,
  FiSave,
} from "react-icons/fi";
import { updateExpenseStatus, deleteExpense } from "../services/expenseService";
import { getCurrentUser } from "../services/authService";
import "../styles/ExpenseDetailModal.css";

/**
 * ExpenseDetailModal component for displaying expense details with conditional actions
 * @param {Object} expense - The expense object to display
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Callback to close the modal
 * @param {Function} onUpdate - Callback when expense is updated
 */
const ExpenseDetailModal = ({ expense, isOpen, onClose, onUpdate }) => {
  const [actionLoading, setActionLoading] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    date: "",
    amount: "",
    category: "",
    description: "",
  });
  const currentUser = getCurrentUser();

  if (!isOpen || !expense) return null;

  // Initialize edit form when entering edit mode
  const handleStartEdit = () => {
    setEditForm({
      date: expense.createdAt || expense.date || "",
      amount: expense.amount?.toString().replace("$", "") || "",
      category: expense.category || expense.employee?.department || "",
      description: expense.description || "",
    });
    setIsEditing(true);
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle saving edited expense
  const handleSaveEdit = async () => {
    setActionLoading((prev) => ({ ...prev, save: true }));

    try {
      // Here you would call an API to update the expense
      // For now, we'll simulate it with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Saving edited expense:", editForm);
      setIsEditing(false);
      onUpdate?.(); // Notify parent to refresh data
    } catch (err) {
      console.error("Error saving expense:", err);
      alert("Failed to save expense. Please try again.");
    } finally {
      setActionLoading((prev) => ({ ...prev, save: false }));
    }
  };

  // Check if user can perform actions (only employees on draft items)
  const canPerformActions =
    currentUser?.role === "employee" && expense.status === "draft";

  // Handle sending expense to pending status
  const handleSendToPending = async () => {
    setActionLoading((prev) => ({ ...prev, pending: true }));

    try {
      await updateExpenseStatus(expense.id, "pending");
      onUpdate?.(); // Notify parent to refresh data
      onClose(); // Close modal after successful action
    } catch (err) {
      console.error("Error updating expense status:", err);
      alert("Failed to update expense status. Please try again.");
    } finally {
      setActionLoading((prev) => ({ ...prev, pending: false }));
    }
  };

  // Handle deleting expense
  const handleDeleteExpense = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete this expense? This action cannot be undone."
      )
    ) {
      return;
    }

    setActionLoading((prev) => ({ ...prev, delete: true }));

    try {
      await deleteExpense(expense.id);
      onUpdate?.(); // Notify parent to refresh data
      onClose(); // Close modal after successful action
    } catch (err) {
      console.error("Error deleting expense:", err);
      alert("Failed to delete expense. Please try again.");
    } finally {
      setActionLoading((prev) => ({ ...prev, delete: false }));
    }
  };

  // Get status class for styling
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
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

  // Format date for display
  const formatDate = (dateString) => {
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

      // Format as readable date
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC", // Prevent timezone issues
      });
    } catch (error) {
      console.warn("Date formatting error:", error);
      return dateString; // Return original if error
    }
  };

  // Format amount for display
  const formatAmount = (amount) => {
    if (typeof amount === "string" && amount.startsWith("$")) {
      return amount;
    }
    return `$${parseFloat(amount || 0).toFixed(2)}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Expense Details</h2>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FiX />
          </button>
        </div>

        <div className="modal-body">
          <div className="expense-detail-grid">
            <div className="detail-item">
              <div className="detail-icon">
                <FiCalendar />
              </div>
              <div className="detail-content">
                <label className="detail-label">Date</label>
                {isEditing ? (
                  <input
                    type="date"
                    className="detail-input"
                    value={editForm.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                ) : (
                  <span className="detail-value">
                    {formatDate(expense.createdAt || expense.date)}
                  </span>
                )}
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <FiUser />
              </div>
              <div className="detail-content">
                <label className="detail-label">Employee</label>
                <span className="detail-value">
                  {expense.employee?.name || "N/A"}
                </span>
                <span className="detail-subvalue">
                  {expense.employee?.department || "N/A"}
                </span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <FiDollarSign />
              </div>
              <div className="detail-content">
                <label className="detail-label">Amount</label>
                {isEditing ? (
                  <input
                    type="number"
                    step="0.01"
                    className="detail-input"
                    value={editForm.amount}
                    onChange={(e) =>
                      handleInputChange("amount", e.target.value)
                    }
                    placeholder="0.00"
                  />
                ) : (
                  <span className="detail-value amount">
                    {formatAmount(expense.amount)}
                  </span>
                )}
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <FiTag />
              </div>
              <div className="detail-content">
                <label className="detail-label">Category</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="detail-input"
                    value={editForm.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    placeholder="Enter category"
                  />
                ) : (
                  <span className="detail-value">
                    {expense.category ||
                      expense.employee?.department ||
                      "General"}
                  </span>
                )}
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-content">
                <label className="detail-label">Status</label>
                <span
                  className={`detail-status ${getStatusClass(expense.status)}`}
                >
                  {expense.statusText || expense.status}
                </span>
              </div>
            </div>

            <div className="detail-item full-width">
              <div className="detail-content">
                <label className="detail-label">Description</label>
                {isEditing ? (
                  <textarea
                    className="detail-textarea"
                    value={editForm.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Enter description"
                    rows="3"
                  />
                ) : (
                  <span className="detail-value">
                    {expense.description || "No description provided"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {canPerformActions && (
          <div className="modal-footer">
            <div className="modal-actions">
              {isEditing ? (
                <>
                  <button
                    className="action-btn save-btn"
                    onClick={handleSaveEdit}
                    disabled={actionLoading.save}
                    aria-label="Save expense changes"
                  >
                    {actionLoading.save ? (
                      <span className="action-loading">Saving...</span>
                    ) : (
                      <>
                        <FiSave />
                        Save Changes
                      </>
                    )}
                  </button>

                  <button
                    className="action-btn cancel-btn"
                    onClick={() => setIsEditing(false)}
                    aria-label="Cancel editing"
                  >
                    <FiX />
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="action-btn edit-btn"
                    onClick={handleStartEdit}
                    aria-label="Edit this expense"
                  >
                    <FiEdit3 />
                    Edit Expense
                  </button>

                  <button
                    className="action-btn send-btn"
                    onClick={handleSendToPending}
                    disabled={actionLoading.pending}
                    aria-label="Send expense to pending approval"
                  >
                    {actionLoading.pending ? (
                      <span className="action-loading">Sending...</span>
                    ) : (
                      <>
                        <FiSend />
                        Send to Pending
                      </>
                    )}
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={handleDeleteExpense}
                    disabled={actionLoading.delete}
                    aria-label="Delete this expense"
                  >
                    {actionLoading.delete ? (
                      <span className="action-loading">Deleting...</span>
                    ) : (
                      <>
                        <FiTrash2 />
                        Delete Expense
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseDetailModal;
