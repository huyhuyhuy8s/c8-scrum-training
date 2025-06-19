/**
 * Expense Service - Handles API requests for expense operations
 * @author GitHub Copilot
 */

import axios from "axios";

// Base URL for the expense API
const API_BASE_URL = "http://localhost:3000/api/expense-requests";

// Default user ID (temporary - until authentication is implemented)
const DEFAULT_USER_ID = 1;

/**
 * Create a new expense
 * @param {Object} expenseData - The expense data to submit
 * @param {string} expenseData.expenseDate - Date of the expense
 * @param {string} expenseData.description - Description of the expense
 * @param {number} expenseData.amount - Amount of the expense
 * @param {File|null} expenseData.image - Image file or null
 * @returns {Promise<Object>} The created expense
 * @throws {Error} Network errors, validation errors, or server errors
 */
export const createExpense = async (expenseData) => {
  try {
    // Validate required fields
    const { expenseDate, description, amount } = expenseData;


    if (!description || !amount || !expenseDate) {
      throw new Error("Date, description, and amount are required");
    }

    // Validate amount is a positive number
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      throw new Error("Amount must be a positive number");
    }

    // Prepare the request payload with default user ID
    const payload = {
      employeeId: DEFAULT_USER_ID,
      description: String(description).trim(),
      amount: parseFloat(amount),
      expenseDate: expenseDate,
      image: expenseData.image ? "image_placeholder" : null, // Simplified for now
    };

    // Make the API request
    const response = await axios.post(`${API_BASE_URL}/employees`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 second timeout
    });

    // Handle the response structure with success wrapper
    if (response.data && response.data.success && response.data.data) {
      return response.data.data;
    } else if (response.data) {
      // Fallback for direct response
      return response.data;
    } else {
      throw new Error("Invalid response format from server");
    }
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 400:
          throw new Error(
            data?.message || "Invalid request data. Please check your input."
          );
        case 401:
          throw new Error("Authentication required. Please log in.");
        case 403:
          throw new Error(
            "You do not have permission to create expense requests."
          );
        case 422:
          throw new Error(
            data?.message || "Validation failed. Please check your input."
          );
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(
            `Request failed with status ${status}. Please try again.`
          );
      }
    } else if (error.request) {
      // Network error - no response received
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    } else {
      // Other errors (validation, etc.)
      throw error;
    }
  }
};

/**
 * Get all expenses for the default user
 * @returns {Promise<Array>} Array of expenses
 * @throws {Error} Network errors or server errors
 */
export const getAllExpenses = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/employees/${DEFAULT_USER_ID}`,
      {
        timeout: 10000,
      }
    );

    // Handle the response structure with success wrapper
    if (
      response.data &&
      response.data.success &&
      Array.isArray(response.data.data)
    ) {
      return response.data.data;
    } else if (Array.isArray(response.data)) {
      // Fallback for direct array response
      return response.data;
    } else {
      throw new Error("Invalid response format from server");
    }
  } catch (error) {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 404:
          throw new Error("No expenses found.");
        case 401:
          throw new Error("Authentication required. Please log in.");
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(
            `Request failed with status ${status}. Please try again.`
          );
      }
    } else if (error.request) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    } else {
      throw error;
    }
  }
};

/**
 * Update an existing expense
 * @param {string} expenseId - The ID of the expense to update
 * @param {Object} expenseData - The updated expense data
 * @param {string} expenseData.expenseDate - Date of the expense
 * @param {string} expenseData.description - Description of the expense
 * @param {number} expenseData.amount - Amount of the expense
 * @param {File|null} expenseData.image - Image file or null
 * @returns {Promise<Object>} The updated expense
 * @throws {Error} Network errors, validation errors, or server errors
 */
export const updateExpense = async (expenseId, expenseData) => {
  try {
    if (!expenseId) {
      throw new Error("Expense ID is required");
    }

    const { expenseDate, description, amount } = expenseData;

    // Validate amount if provided
    if (amount !== undefined && (isNaN(amount) || parseFloat(amount) <= 0)) {
      throw new Error("Amount must be a positive number");
    }

    // Prepare the request payload
    const payload = {
      employeeId: DEFAULT_USER_ID, // Always use default user ID
    };

    if (description !== undefined)
      payload.description = String(description).trim();
    if (amount !== undefined) payload.amount = parseFloat(amount);
    if (expenseDate !== undefined) payload.expenseDate = expenseDate;
    if (expenseData.image !== undefined)
      payload.image = expenseData.image ? "image_placeholder" : null;

    const response = await axios.put(`${API_BASE_URL}/${expenseId}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    // Handle the response structure with success wrapper
    if (response.data && response.data.success && response.data.data) {
      return response.data.data;
    } else if (response.data) {
      // Fallback for direct response
      return response.data;
    } else {
      throw new Error("Invalid response format from server");
    }
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          throw new Error(
            data?.message || "Invalid request data. Please check your input."
          );
        case 401:
          throw new Error("Authentication required. Please log in.");
        case 403:
          throw new Error("You do not have permission to update this expense.");
        case 404:
          throw new Error("Expense not found.");
        case 422:
          throw new Error(
            data?.message || "Validation failed. Please check your input."
          );
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(
            `Request failed with status ${status}. Please try again.`
          );
      }
    } else if (error.request) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    } else {
      throw error;
    }
  }
};

/**
 * Update expense status
 * @param {number} expenseId - The ID of the expense to update
 * @param {string} status - The new status ('pending', 'approved', 'rejected', 'draft')
 * @returns {Promise<Object>} The response from the API
 * @throws {Error} If the update fails
 */
export const updateExpenseStatus = async (expenseId, status) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/expenses/${expenseId}/status`, {
      status: status
    });

    return response.data;
  } catch (error) {
    console.error('Error updating expense status:', error);
    throw new Error(error.response?.data?.message || 'Failed to update expense status');
  }
};

/**
 * Delete an expense
 * @param {number} expenseId - The ID of the expense to delete
 * @returns {Promise<Object>} The response from the API
 * @throws {Error} If the deletion fails
 */
export const deleteExpense = async (expenseId) => {
  try {
    if (!expenseId) {
      throw new Error("Expense ID is required");
    }

    const response = await axios.delete(`${API_BASE_URL}/${expenseId}`, {
      timeout: 10000,
    });

    // Handle the response structure with success wrapper
    if (response.data && response.data.success && response.data.data) {
      return response.data.data;
    } else if (response.data) {
      // Fallback for direct response
      return response.data;
    } else {
      throw new Error("Invalid response format from server");
    }
  } catch (error) {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 401:
          throw new Error("Authentication required. Please log in.");
        case 403:
          throw new Error("You do not have permission to delete this expense.");
        case 404:
          throw new Error("Expense not found.");
        case 500:
          throw new Error("Server error. Please try again later.");
        default:
          throw new Error(
            `Request failed with status ${status}. Please try again.`
          );
      }
    } else if (error.request) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    } else {
      throw error;
    }
  }
};

// Named exports for individual functions
export default {
  createExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
};
