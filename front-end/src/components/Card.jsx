import React from 'react'

/**
 * Card component for displaying expense statistics
 * @param {string} title - The card title
 * @param {string|number} count - The count to display
 * @param {string} subtitle - The subtitle text
 * @param {Function} onClick - Callback function when card is clicked
 * @param {string} filterValue - The filter value to pass when clicked
 * @param {boolean} isActive - Whether this card filter is currently active
 */
const Card = ({ title, count, subtitle, onClick, filterValue, isActive = false }) => {
  const handleClick = () => {
    if (onClick && filterValue) {
      onClick(filterValue);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick && filterValue) {
      e.preventDefault();
      onClick(filterValue);
    }
  };

  return (
    <div 
      className={`card-container ${onClick ? 'card-clickable' : ''} ${isActive ? 'card-active' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Filter by ${title}` : undefined}
      title={onClick ? `Click to filter by ${title}` : undefined}
    >
      <div className="card-title">
        {title}
      </div>
      
      <div className="card-count">
        {count}
      </div>
      
      <div className="card-subtitle">
        {subtitle}
      </div>
    </div>
  )
}

export default Card