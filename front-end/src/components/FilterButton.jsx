import React, { useState, useEffect } from 'react';
import { FiFilter, FiX, FiChevronDown, FiCalendar } from 'react-icons/fi';

/**
 * FilterButton component for manual filtering of expense list
 * @param {Function} onFilterChange - Callback when filters change
 * @param {Object} currentFilters - Current active filters
 * @param {Function} onClearFilters - Callback to clear all filters
 */
const FilterButton = ({ onFilterChange, currentFilters = {}, onClearFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: currentFilters.status || '',
    department: currentFilters.department || '',
    startDate: currentFilters.startDate || '',
    endDate: currentFilters.endDate || '',
    ...currentFilters
  });

  // Sync internal state with external currentFilters prop
  useEffect(() => {
    setFilters({
      status: currentFilters.status || '',
      department: currentFilters.department || '',
      startDate: currentFilters.startDate || '',
      endDate: currentFilters.endDate || '',
      ...currentFilters
    });
  }, [currentFilters]);

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'draft', label: 'Draft' }
  ];

  const departmentOptions = [
    { value: '', label: 'All Departments' },
    { value: 'IT', label: 'IT' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Sales', label: 'Sales' },
    { value: 'HR', label: 'HR' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Operations', label: 'Operations' },
    { value: 'Design', label: 'Design' },
    { value: 'Engineering', label: 'Engineering' }
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleDateInputChange = (dateType, value) => {
    const newFilters = { ...filters, [dateType]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      status: '',
      department: '',
      startDate: '',
      endDate: ''
    };
    setFilters(clearedFilters);
    onClearFilters?.();
    setIsOpen(false);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="filter-button-container">
      <button
        className={`filter-button ${isOpen ? 'active' : ''} ${hasActiveFilters ? 'has-filters' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open filter options"
        aria-expanded={isOpen}
      >
        <FiFilter className="filter-icon" />
        <span>Filters</span>
        {hasActiveFilters && <span className="filter-count">{Object.values(filters).filter(v => v !== '').length}</span>}
        <FiChevronDown className={`filter-chevron ${isOpen ? 'rotated' : ''}`} />
      </button>

      {isOpen && (
        <div className="filter-dropdown" role="menu">
          <div className="filter-dropdown-header">
            <h3>Filter Options</h3>
            <button
              className="filter-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close filters"
            >
              <FiX />
            </button>
          </div>

          <div className="filter-dropdown-content">
            {/* Status Filter */}
            <div className="filter-group">
              <label htmlFor="status-filter" className="filter-label">Status</label>
              <select
                id="status-filter"
                className="filter-select"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Department Filter */}
            <div className="filter-group">
              <label htmlFor="department-filter" className="filter-label">Department</label>
              <select
                id="department-filter"
                className="filter-select"
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
              >
                {departmentOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Range Filter */}
            <div className="filter-group">
              <label className="filter-label">Date Range</label>
              <div className="date-range-inputs">
                <div className="date-input-group">
                  <label htmlFor="start-date" className="date-label">
                    <FiCalendar className="date-icon" />
                    From
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    className="date-input"
                    value={filters.startDate}
                    onChange={(e) => handleDateInputChange('startDate', e.target.value)}
                    max={filters.endDate || undefined}
                  />
                </div>
                <div className="date-input-group">
                  <label htmlFor="end-date" className="date-label">
                    <FiCalendar className="date-icon" />
                    To
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    className="date-input"
                    value={filters.endDate}
                    onChange={(e) => handleDateInputChange('endDate', e.target.value)}
                    min={filters.startDate || undefined}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="filter-dropdown-footer">
            <button
              className="filter-clear-btn"
              onClick={handleClearFilters}
              disabled={!hasActiveFilters}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
