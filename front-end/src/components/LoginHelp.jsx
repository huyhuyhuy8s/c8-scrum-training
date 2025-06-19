import React, { useState } from 'react';
import { FiInfo, FiX, FiUser, FiMail, FiLock, FiShield } from 'react-icons/fi';
import { getMockUsers } from '../services/authService';

/**
 * LoginHelp component - Shows available demo accounts
 * @component
 * @returns {JSX.Element} The login help component
 */
const LoginHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mockUsers = getMockUsers();

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin': return '👨‍💻';
      case 'manager': return '👨‍💼';
      case 'financial officer': return '💰';
      case 'employee': return '👤';
      default: return '👤';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return '#dc2626';
      case 'manager': return '#2563eb';
      case 'financial officer': return '#059669';
      case 'employee': return '#7c3aed';
      default: return '#6b7280';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="login-help-trigger"
        aria-label="Show demo accounts"
        title="Show demo accounts"
      >
        <FiInfo />
        Demo Accounts
      </button>
    );
  }

  return (
    <div className="login-help-overlay" onClick={() => setIsOpen(false)}>
      <div className="login-help-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-help-header">
          <h3>
            <FiUser />
            Demo Accounts
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="login-help-close"
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>
        
        <div className="login-help-content">
          <p className="login-help-description">
            Use any of these demo accounts to test the application:
          </p>
          
          <div className="login-help-accounts">
            {mockUsers.map((user) => (
              <div key={user.id} className="login-help-account">
                <div className="login-help-account-header">
                  <span className="login-help-role-icon">
                    {getRoleIcon(user.role)}
                  </span>
                  <div className="login-help-account-info">
                    <h4>{user.name}</h4>
                    <span 
                      className="login-help-role"
                      style={{ color: getRoleColor(user.role) }}
                    >
                      <FiShield />
                      {user.role}
                    </span>
                  </div>
                </div>
                
                <div className="login-help-credentials">
                  <div className="login-help-credential">
                    <FiMail />
                    <span>Email: <code>{user.email}</code></span>
                  </div>
                  <div className="login-help-credential">
                    <FiLock />
                    <span>Password: <code>{user.email.split('@')[0]}123</code></span>
                  </div>
                </div>
                
                <div className="login-help-department">
                  Department: {user.department}
                </div>
              </div>
            ))}
          </div>
          
          <div className="login-help-note">
            <strong>Note:</strong> This is a demo application with mock authentication. 
            No real API calls are made.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHelp;
