import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiX, FiChevronDown } from "react-icons/fi";
import "../styles/SearchInput.css";

/**
 * SearchInput component for searching expenses by various criteria
 * @param {Function} onSearchChange - Callback when search query changes
 * @param {string} value - Current search value
 * @param {string} searchCriteria - Current search criteria
 * @param {Function} onSearchCriteriaChange - Callback when search criteria changes
 */
const SearchInput = ({ 
  onSearchChange, 
  value = "",
  searchCriteria = "employee",
  onSearchCriteriaChange
}) => {
  const [searchQuery, setSearchQuery] = useState(value);
  const [currentCriteria, setCurrentCriteria] = useState(searchCriteria);
  const [isFocused, setIsFocused] = useState(false);
  const [showCriteriaDropdown, setShowCriteriaDropdown] = useState(false);
  const inputRef = useRef(null);
  const criteriaRef = useRef(null);

  const searchOptions = [
    { value: 'employee', label: 'Employee Name', placeholder: 'Search by employee name...' },
    { value: 'department', label: 'Department', placeholder: 'Search by department...' },
    { value: 'description', label: 'Description', placeholder: 'Search by description...' },
    { value: 'category', label: 'Category', placeholder: 'Search by category...' },
    { value: 'amount', label: 'Amount', placeholder: 'Search by amount...' },
    { value: 'all', label: 'All Fields', placeholder: 'Search all fields...' }
  ];

  // Get current search option
  const currentOption = searchOptions.find(option => option.value === currentCriteria) || searchOptions[0];

  // Sync internal state with external values
  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  useEffect(() => {
    setCurrentCriteria(searchCriteria);
  }, [searchCriteria]);

  // Debounced search to avoid excessive calls
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearchChange?.(searchQuery, currentCriteria);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, currentCriteria, onSearchChange]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (criteriaRef.current && !criteriaRef.current.contains(event.target)) {
        setShowCriteriaDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    onSearchChange?.("", currentCriteria);
    inputRef.current?.focus();
  };

  const handleCriteriaChange = (newCriteria) => {
    setCurrentCriteria(newCriteria);
    setShowCriteriaDropdown(false);
    onSearchCriteriaChange?.(newCriteria);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClearSearch();
    }
  };

  return (
    <div className={`search-input-container ${isFocused ? "focused" : ""} ${searchQuery ? "has-value" : ""}`}>
      <div className="search-input-wrapper">
        <div className="search-criteria-selector" ref={criteriaRef}>
          <button
            className="search-criteria-btn"
            onClick={() => setShowCriteriaDropdown(!showCriteriaDropdown)}
            aria-label="Select search criteria"
            type="button"
          >
            <span className="search-criteria-text">{currentOption.label}</span>
            <FiChevronDown className={`search-criteria-chevron ${showCriteriaDropdown ? 'rotated' : ''}`} />
          </button>
          
          {showCriteriaDropdown && (
            <div className="search-criteria-dropdown">
              {searchOptions.map(option => (
                <button
                  key={option.value}
                  className={`search-criteria-option ${currentCriteria === option.value ? 'active' : ''}`}
                  onClick={() => handleCriteriaChange(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="search-input-field">
          <FiSearch className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder={currentOption.placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            aria-label={`Search expenses by ${currentOption.label.toLowerCase()}`}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={handleClearSearch}
              aria-label="Clear search"
              type="button"
            >
              <FiX />
            </button>
          )}
        </div>
      </div>
      {searchQuery && (
        <div className="search-info">
          Searching {currentOption.label.toLowerCase()} for: <span className="search-term">"{searchQuery}"</span>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
