import React from 'react'

const Card = ({ title, count, subtitle }) => {
  return (
    <div className="card-container">
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