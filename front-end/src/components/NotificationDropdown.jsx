import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FiBell,
  FiCheck,
  FiX,
  FiClock,
  FiPlus,
  FiChevronDown,
  FiCheckCircle,
  FiAlertCircle,
  FiInfo
} from 'react-icons/fi';
import { getCurrentUser } from '../services/authService';
import {
  getNotificationsByRole,
  formatNotificationTime,
  getNotificationIcon,
  getNotificationType
} from '../services/notificationService';
import '../styles/NotificationDropdown.css';

/**
 * NotificationDropdown component for displaying user notifications
 * Shows different notifications based on user role:
 * - Employees: Status changes from managers/finance
 * - Managers/Finance: New pending submissions
 * @author GitHub Copilot
 */
const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);
  const dropdownRef = useRef(null);
  const currentUser = getCurrentUser();

  // Auto-refresh interval (5 minutes)
  const REFRESH_INTERVAL = 5 * 60 * 1000;

  /**
   * Fetch notifications from the API
   */
  const fetchNotifications = useCallback(async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      setError(null);
      const data = await getNotificationsByRole(currentUser);
      setNotifications(data);
      setLastChecked(new Date());
    } catch (err) {
      console.error('Error fetching notifications:', err);
      setError(err.message);
      // Don't clear existing notifications on error - keep showing cached data
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  /**
   * Handle clicking outside the dropdown to close it
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Handle escape key to close dropdown
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  /**
   * Initial load and auto-refresh setup
   */
  useEffect(() => {
    fetchNotifications();

    // Set up auto-refresh
    const intervalId = setInterval(fetchNotifications, REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, [fetchNotifications, REFRESH_INTERVAL]);

  /**
   * Toggle dropdown visibility
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Refresh notifications when opening
      fetchNotifications();
    }
  };

  /**
   * Get the appropriate React Icon component
   */
  const getIconComponent = (iconName) => {
    const icons = {
      FiCheck,
      FiX,
      FiClock,
      FiPlus,
      FiBell,
      FiCheckCircle,
      FiAlertCircle,
      FiInfo
    };
    return icons[iconName] || FiBell;
  };

  /**
   * Format notification message
   */
  const formatNotificationMessage = (notification) => {
    if (!notification.request) {
      return notification.action || 'New notification';
    }

    const { request } = notification;
    const employeeName = request.employee?.name || 'Someone';
    const amount = request.amount ? `$${parseFloat(request.amount).toFixed(2)}` : '';
    const action = notification.action || '';

    if (currentUser?.role?.toLowerCase() === 'employee') {
      // For employees: show status changes
      if (action.toLowerCase().includes('approved')) {
        return `Your expense request ${amount ? `(${amount})` : ''} has been approved`;
      } else if (action.toLowerCase().includes('rejected')) {
        return `Your expense request ${amount ? `(${amount})` : ''} has been rejected`;
      } else if (action.toLowerCase().includes('pending')) {
        return `Your expense request ${amount ? `(${amount})` : ''} is under review`;
      }
    } else {
      // For managers/finance: show new submissions
      if (action.toLowerCase().includes('created') || action.toLowerCase().includes('submitted')) {
        return `${employeeName} submitted a new expense request ${amount ? `(${amount})` : ''}`;
      }
    }

    return action;
  };

  /**
   * Get notification subtitle/description
   */
  const getNotificationSubtitle = (notification) => {
    if (!notification.request) return '';
    
    const description = notification.request.description;
    return description ? description.substring(0, 50) + (description.length > 50 ? '...' : '') : '';
  };

  // Calculate unread count (notifications from last 24 hours)
  const unreadCount = notifications.filter(notification => {
    const notificationTime = new Date(notification.timestamp);
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return notificationTime > oneDayAgo;
  }).length;

  return (
    <div className="notification-dropdown" ref={dropdownRef}>
      <button
        className={`notification-trigger ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FiBell className="notification-icon" />
        {unreadCount > 0 && (
          <span className="notification-badge" aria-label={`${unreadCount} unread notifications`}>
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
        <FiChevronDown className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`} />
      </button>

      {isOpen && (
        <div className="notification-dropdown-menu" role="menu" aria-label="Notifications menu">
          <div className="notification-header">
            <h3 className="notification-title">Notifications</h3>
            {lastChecked && (
              <span className="last-updated">
                Updated {formatNotificationTime(lastChecked.toISOString())}
              </span>
            )}
          </div>

          <div className="notification-list">
            {loading && notifications.length === 0 ? (
              <div className="notification-item loading">
                <div className="loading-spinner"></div>
                <span>Loading notifications...</span>
              </div>
            ) : error && notifications.length === 0 ? (
              <div className="notification-item error">
                <FiAlertCircle className="error-icon" />
                <div className="notification-content">
                  <div className="notification-message">Unable to load notifications</div>
                  <div className="notification-subtitle">{error}</div>
                </div>
              </div>
            ) : notifications.length === 0 ? (
              <div className="notification-item empty">
                <FiBell className="empty-icon" />
                <div className="notification-content">
                  <div className="notification-message">No notifications</div>
                  <div className="notification-subtitle">You're all caught up!</div>
                </div>
              </div>
            ) : (
              notifications.slice(0, 10).map((notification) => {
                const IconComponent = getIconComponent(
                  getNotificationIcon(notification.action, notification.request?.status)
                );
                const notificationType = getNotificationType(
                  notification.action, 
                  notification.request?.status
                );

                return (
                  <div
                    key={notification.id}
                    className={`notification-item ${notificationType}`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <div className={`notification-icon-wrapper ${notificationType}`}>
                      <IconComponent className="notification-type-icon" />
                    </div>
                    <div className="notification-content">
                      <div className="notification-message">
                        {formatNotificationMessage(notification)}
                      </div>
                      {getNotificationSubtitle(notification) && (
                        <div className="notification-subtitle">
                          {getNotificationSubtitle(notification)}
                        </div>
                      )}
                      <div className="notification-time">
                        {formatNotificationTime(notification.timestamp)}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {notifications.length > 10 && (
            <div className="notification-footer">
              <div className="showing-count">
                Showing 10 of {notifications.length} notifications
              </div>
            </div>
          )}

          {error && notifications.length > 0 && (
            <div className="notification-footer error">
              <FiAlertCircle className="error-icon" />
              <span>Some notifications may be outdated</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;