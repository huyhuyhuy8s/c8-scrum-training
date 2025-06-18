import React from 'react';
import { FiCheck, FiX, FiCalendar, FiFilter } from 'react-icons/fi';

const FinanceAction = ({ 
  selectedCount = 0, 
  onAccept, 
  onReject,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onDateFilter
}) => {
  return (
    <div className="action-container">
      <div className="action-left">
        
        {/* Date Filter Section */}
        <div className="date-filter-section">
          <div className="date-input-group">
            <label htmlFor="startDate" className="date-label">
              <FiCalendar className="date-icon" />
              Start Date:
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              className="date-input"
              aria-label="Select start date for filtering"
            />
          </div>
          
          <div className="date-input-group">
            <label htmlFor="endDate" className="date-label">
              <FiCalendar className="date-icon" />
              End Date:
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="date-input"
              aria-label="Select end date for filtering"
              min={startDate} // End date cannot be before start date
            />
          </div>
          
          <button
            onClick={onDateFilter}
            className="filter-button"
            disabled={!startDate || !endDate}
            title="Apply date filter"
            aria-label="Apply date filter to expense requests"
          >
            <FiFilter />
            Apply Filter
          </button>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="action-right">
        <div className="action-info">
          <span className="selected-count">
            {selectedCount} request(s) selected
          </span>
        </div>
        
        <div className="action-buttons">
          <button
            onClick={onAccept}
            className="action-create-button accept-button"
            disabled={selectedCount === 0}
            title={selectedCount === 0 ? 'Select requests to approve' : `Approve ${selectedCount} request(s)`}
            aria-label={`Approve ${selectedCount} selected expense requests`}
          >
            <FiCheck />
            Approve ({selectedCount})
          </button>
          
          <button
            onClick={onReject}
            className="action-create-button reject-button"
            disabled={selectedCount === 0}
            title={selectedCount === 0 ? 'Select requests to reject' : `Reject ${selectedCount} request(s)`}
            aria-label={`Reject ${selectedCount} selected expense requests`}
          >
            <FiX />
            Reject ({selectedCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceAction;
