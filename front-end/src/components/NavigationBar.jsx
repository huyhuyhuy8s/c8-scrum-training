import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiDollarSign,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { MdOutlineReceiptLong } from "react-icons/md";
import { logoutUser, getCurrentUser } from "../services/authService";
import NotificationDropdown from "./NotificationDropdown";

/**
 * Navigation bar component for the expense management application
 * Uses 15% of viewport height (15vh) as specified in requirements
 * @component
 * @returns {JSX.Element} The navigation bar
 */
const NavigationBar = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      // Still navigate to login even if logout fails
      navigate("/login");
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        {/* Brand Section */}
        <div className="navbar__brand">
          <FiDollarSign className="navbar__logo-icon" aria-hidden="true" />
          <span className="navbar__brand-text">C8</span>
        </div>        {/* User Section */}
        <div className="navbar__user">
          <NotificationDropdown />
          <div className="navbar__profile">
            <button
              className="navbar__profile-button"
              aria-label="User profile menu"
            >
              <FiUser className="navbar__icon" aria-hidden="true" />
              <span className="navbar__profile-name">
                {currentUser?.name || "User"}
              </span>
            </button>
          </div>{" "}
          <button className="navbar__settings" aria-label="Open settings">
            <FiSettings className="navbar__icon" aria-hidden="true" />
          </button>
          <button
            className="navbar__logout"
            aria-label="Log out"
            onClick={handleLogout}
          >
            <FiLogOut className="navbar__icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
