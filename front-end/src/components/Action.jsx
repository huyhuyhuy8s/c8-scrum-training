import React from 'react'

const Action = ({ title, buttonText, onButtonClick, onRefresh }) => {
  return (
    <div className="action-container">
      <h1 className="action-title">
        {title}
      </h1>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button 
          className="action-button"
          onClick={onButtonClick}
        >
          <span className="action-button-icon">+</span>
          {buttonText}
        </button>
        <button 
          className="action-button"
          style={{ background: '#dedcff', color: '#2f27ce' }}
          onClick={onRefresh}
        >
          <span className="action-button-icon" style={{ fontWeight: 'bold' }}>⟳</span>
          Refresh
        </button>
      </div>
    </div>
  )
}

export default Action