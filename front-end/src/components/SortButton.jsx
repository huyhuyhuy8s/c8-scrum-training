import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiArrowUp, FiArrowDown } from "react-icons/fi";
import "../styles/SortButton.css";

/**
 * SortButton component for sorting data by various criteria
 * @param {Function} onSortChange - Callback when sort option changes
 * @param {Object} currentSort - Current sort configuration { field, direction }
 */
const SortButton = ({ onSortChange, currentSort = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sort options configuration
  const sortOptions = [
    { field: "date", label: "Date", directions: ["newest", "oldest"] },
    { field: "employee", label: "Employee", directions: ["asc", "desc"] },
    { field: "department", label: "Department", directions: ["asc", "desc"] },
    { field: "amount", label: "Amount", directions: ["highest", "lowest"] },
    { field: "status", label: "Status", directions: ["priority", "alphabetical"] },
  ];

  // Direction labels for display
  const getDirectionLabel = (field, direction) => {
    const labels = {
      date: { newest: "Newest First", oldest: "Oldest First" },
      employee: { asc: "A to Z", desc: "Z to A" },
      department: { asc: "A to Z", desc: "Z to A" },
      amount: { highest: "Highest First", lowest: "Lowest First" },
      status: { priority: "By Priority", alphabetical: "Alphabetical" },
    };
    return labels[field]?.[direction] || direction;
  };

  // Get direction icon
  const getDirectionIcon = (direction) => {
    if (["newest", "highest", "desc", "priority"].includes(direction)) {
      return <FiArrowDown className="sort-direction-icon" />;
    }
    return <FiArrowUp className="sort-direction-icon" />;
  };

  // Handle sort option selection
  const handleSortSelect = (field, direction) => {
    const newSort = { field, direction };
    onSortChange(newSort);
    setIsOpen(false);
  };

  // Clear sort
  const handleClearSort = () => {
    onSortChange({});
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get current sort display text
  const getCurrentSortText = () => {
    if (!currentSort.field || !currentSort.direction) {
      return "Sort by";
    }
    const option = sortOptions.find(opt => opt.field === currentSort.field);
    return `${option?.label}: ${getDirectionLabel(currentSort.field, currentSort.direction)}`;
  };

  // Check if there's an active sort
  const hasActiveSort = currentSort.field && currentSort.direction;

  return (
    <div className="sort-button-container" ref={dropdownRef}>
      <button
        className={`sort-button ${isOpen ? "open" : ""} ${hasActiveSort ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Sort options"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sort-button-text">{getCurrentSortText()}</span>
        {hasActiveSort && getDirectionIcon(currentSort.direction)}
        <FiChevronDown className={`sort-chevron ${isOpen ? "rotated" : ""}`} />
      </button>

      {isOpen && (
        <div className="sort-dropdown">
          <div className="sort-dropdown-header">
            <span className="sort-dropdown-title">Sort Options</span>
            {hasActiveSort && (
              <button
                className="sort-clear-button"
                onClick={handleClearSort}
                aria-label="Clear sort"
              >
                Clear
              </button>
            )}
          </div>

          <div className="sort-options">
            {sortOptions.map((option) => (
              <div key={option.field} className="sort-option-group">
                <div className="sort-option-label">{option.label}</div>
                {option.directions.map((direction) => (
                  <button
                    key={`${option.field}-${direction}`}
                    className={`sort-option ${
                      currentSort.field === option.field && 
                      currentSort.direction === direction
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleSortSelect(option.field, direction)}
                    aria-label={`Sort by ${option.label} ${getDirectionLabel(option.field, direction)}`}
                  >
                    <span className="sort-option-text">
                      {getDirectionLabel(option.field, direction)}
                    </span>
                    {getDirectionIcon(direction)}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
