/**
 * Notification Service - Handles API requests for notification operations
 * @author GitHub Copilot
 */

import axios from 'axios';
import { sampleNotificationData } from '../data/sampleData';

// Base URL for the notification API
const API_BASE_URL = 'http://localhost:3000/api/system-logs';

/**
 * Get notifications for an employee (when Manager or Finance responds)
 * @param {number} employeeId - The employee ID to get notifications for
 * @returns {Promise<Array>} Array of notification objects
 * @throws {Error} Network errors, validation errors, or server errors
 */
export const getEmployeeNotifications = async (employeeId) => {
  try {
    if (!employeeId) {
      throw new Error('Employee ID is required');
    }

    const response = await axios.get(`${API_BASE_URL}/${employeeId}`, {
      timeout: 10000, // 10 second timeout
    });

    return response.data || [];

  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 404:
          // Fall back to sample data filtered for employees
          console.warn('API not available, using sample notification data');
          return sampleNotificationData.filter(n => 
            n.request?.employee?.role === 'EMPLOYEE' && 
            n.request?.employeeId === employeeId
          );
        case 401:
          throw new Error('Authentication required. Please log in.');
        case 403:
          throw new Error('You do not have permission to view these notifications.');
        case 500:
          throw new Error('Server error. Please try again later.');
        default:
          throw new Error(`Request failed with status ${status}. Please try again.`);
      }
    } else if (error.request) {
      // Network error - fall back to sample data
      console.warn('Network error, using sample notification data');
      return sampleNotificationData.filter(n => 
        n.request?.employee?.role === 'EMPLOYEE' && 
        n.request?.employeeId === employeeId
      );
    } else {
      throw error;
    }
  }
};

/**
 * Get all submitted (PENDING) notifications for managers
 * @returns {Promise<Array>} Array of notification objects for pending submissions
 * @throws {Error} Network errors, validation errors, or server errors
 */
export const getManagerNotifications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/allSubmit`, {
      timeout: 10000, // 10 second timeout
    });

    return response.data || [];

  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 404:
          // Fall back to sample data for manager notifications
          console.warn('API not available, using sample notification data');
          return sampleNotificationData.filter(n => 
            n.action?.toLowerCase().includes('submitted') || 
            n.action?.toLowerCase().includes('created')
          );
        case 401:
          throw new Error('Authentication required. Please log in.');
        case 403:
          throw new Error('You do not have permission to view manager notifications.');
        case 500:
          throw new Error('Server error. Please try again later.');
        default:
          throw new Error(`Request failed with status ${status}. Please try again.`);
      }
    } else if (error.request) {
      // Network error - fall back to sample data
      console.warn('Network error, using sample notification data');
      return sampleNotificationData.filter(n => 
        n.action?.toLowerCase().includes('submitted') || 
        n.action?.toLowerCase().includes('created')
      );
    } else {
      throw error;
    }
  }
};

/**
 * Get notifications based on user role
 * @param {Object} user - The current user object
 * @param {string} user.role - User role (EMPLOYEE, MANAGER, FINANCIAL_OFFICER, ADMIN)
 * @param {number} user.id - User ID for employee notifications
 * @returns {Promise<Array>} Array of notification objects
 * @throws {Error} Network errors, validation errors, or server errors
 */
export const getNotificationsByRole = async (user) => {
  try {
    if (!user || !user.role) {
      throw new Error('User information is required');
    }

    switch (user.role.toLowerCase()) {
      case 'employee':
        return await getEmployeeNotifications(user.id);
      
      case 'manager':
      case 'financial_officer':
      case 'admin':
        return await getManagerNotifications();
      
      default:
        console.warn(`Unknown user role: ${user.role}`);
        return [];
    }

  } catch (error) {
    console.error('Error fetching notifications by role:', error);
    throw error;
  }
};

/**
 * Format notification timestamp for display
 * @param {string} timestamp - ISO timestamp string
 * @returns {string} Formatted relative time or absolute time
 */
export const formatNotificationTime = (timestamp) => {
  try {
    const notificationDate = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - notificationDate) / (1000 * 60));

    if (diffInMinutes < 1) {
      return 'Just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) { // Less than 24 hours
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours}h ago`;
    } else if (diffInMinutes < 10080) { // Less than 7 days
      const days = Math.floor(diffInMinutes / 1440);
      return `${days}d ago`;
    } else {
      // Show absolute date for older notifications
      return notificationDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: notificationDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }
  } catch (error) {
    console.warn('Error formatting notification time:', error);
    return 'Unknown time';
  }
};

/**
 * Get notification icon based on action type
 * @param {string} action - The notification action
 * @param {string} status - The expense status
 * @returns {string} Icon name for React Icons
 */
export const getNotificationIcon = (action, status) => {
  if (action?.toLowerCase().includes('created')) {
    return 'FiPlus';
  } else if (action?.toLowerCase().includes('approved') || status === 'approved' || status === 'final_approved') {
    return 'FiCheck';
  } else if (action?.toLowerCase().includes('rejected') || status === 'rejected') {
    return 'FiX';
  } else if (action?.toLowerCase().includes('pending') || status === 'pending') {
    return 'FiClock';
  } else {
    return 'FiBell';
  }
};

/**
 * Get notification type class for styling
 * @param {string} action - The notification action
 * @param {string} status - The expense status
 * @returns {string} CSS class name
 */
export const getNotificationType = (action, status) => {
  if (action?.toLowerCase().includes('approved') || status === 'approved' || status === 'final_approved') {
    return 'success';
  } else if (action?.toLowerCase().includes('rejected') || status === 'rejected') {
    return 'error';
  } else if (action?.toLowerCase().includes('pending') || status === 'pending') {
    return 'warning';
  } else {
    return 'info';
  }
};