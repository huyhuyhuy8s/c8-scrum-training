import React from "react";
import {
  FiHome,
  FiDollarSign,
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
} from "react-icons/fi";
import { MdOutlineReceiptLong } from "react-icons/md";

/**
 * Navigation bar component for the expense management application
 * Uses 15% of viewport height (15vh) as specified in requirements
 * @component
 * @returns {JSX.Element} The navigation bar
 */
const NavigationBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        {/* Brand Section */}
        <div className="navbar__brand">
          <FiDollarSign className="navbar__logo-icon" aria-hidden="true" />
          <span className="navbar__brand-text">C8</span>
        </div>

        {/* User Section */}
        <div className="navbar__user">
          <button
            className="navbar__notification"
            aria-label="View notifications"
          >
            <FiBell className="navbar__icon" aria-hidden="true" />
            <span
              className="navbar__notification-badge"
              aria-label="3 unread notifications"
            >
              3
            </span>
          </button>

          <div className="navbar__profile">
            <button
              className="navbar__profile-button"
              aria-label="User profile menu"
            >
              <FiUser className="navbar__icon" aria-hidden="true" />
              <span className="navbar__profile-name">John Doe</span>
            </button>
          </div>

          <button className="navbar__settings" aria-label="Open settings">
            <FiSettings className="navbar__icon" aria-hidden="true" />
          </button>

          <button className="navbar__logout" aria-label="Log out">
            <FiLogOut className="navbar__icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
