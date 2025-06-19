import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import '../styles/ManagerAction.css';

const ManagerAction = ({ title, selectedCount, onAccept, onReject }) => {
  return (
    <div className="manager-action-container">
      <div className="manager-action-info">
        <h1 className="manager-action-title">
          {title}
        </h1>
        {selectedCount > 0 && (
          <span className="manager-action-count">
            {selectedCount} request(s) selected
          </span>
        )}
      </div>
      
      <div className="manager-action-buttons">
        <button 
          className={`manager-action-button manager-action-accept ${selectedCount === 0 ? 'disabled' : ''}`}
          onClick={onAccept}
          disabled={selectedCount === 0}
          title={selectedCount === 0 ? "Select requests to approve" : "Accept selected requests"}
        >
          <FiCheck className="manager-action-icon" />
          Accept
        </button>
        
        <button 
          className={`manager-action-button manager-action-reject ${selectedCount === 0 ? 'disabled' : ''}`}
          onClick={onReject}
          disabled={selectedCount === 0}
          title={selectedCount === 0 ? "Select requests to reject" : "Reject selected requests"}
        >
          <FiX className="manager-action-icon" />
          Reject
        </button>
      </div>
    </div>
  );
};

export default ManagerAction;
