import React from 'react'
import '../style/action.css'

const Action = ({ title, buttonText, onButtonClick }) => {
  return (
    <div className="action-container">
      <h1 className="action-title">
        {title}
      </h1>
      
      <button 
        className="action-button"
        onClick={onButtonClick}
      >
        <span className="action-button-icon">+</span>
        {buttonText}
      </button>
    </div>
  )
}

export default Action