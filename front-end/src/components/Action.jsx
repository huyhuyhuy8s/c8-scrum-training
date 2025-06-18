import React from 'react'

const Action = ({ title, buttons = [], userRole = 'employee' }) => {
  // Default button for employee (backward compatibility)
  const defaultButtons = [
    {
      text: "Create a new request",
      icon: "+",
      className: "action-create-button",
      onClick: () => console.log("Create new request")
    }
  ];

  const displayButtons = buttons.length > 0 ? buttons : defaultButtons;

  return (
    <div className="action-container">
      <h1 className="action-title">
        {title}
      </h1>
      
      <div className="action-buttons-container">
        {displayButtons.map((button, index) => (
          <button 
            key={index}
            className={button.className || "action-create-button"}
            onClick={button.onClick}
            title={button.title || button.text}
          >
            {button.icon && (
              <span className="action-button-icon">{button.icon}</span>
            )}
            {button.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Action