import React from 'react'

const Card = ({ title, count, subtitle, onClick }) => {
  return (
    <div className="card-container" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
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