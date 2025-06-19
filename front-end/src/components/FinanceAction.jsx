import React from 'react';
import { FiCalendar, FiFilter, FiFileText } from 'react-icons/fi';

const FinanceAction = ({ 
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onDateFilter,
  onSummary,
  onClearFilter,
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
          <button
            onClick={onClearFilter}
            className="filter-button clear-filter-button"
            title="Clear date filter"
            aria-label="Clear date filter"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="action-right">
        <button
            onClick={onSummary}
            className="action-create-button summary-button"
            title="Generate summary report"
            aria-label="Generate summary report of expense requests"
        >
            <FiFileText />
            Summary
        </button>
      </div>
    </div>
  );
};

export default FinanceAction;
