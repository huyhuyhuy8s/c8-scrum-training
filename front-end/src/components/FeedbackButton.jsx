import React from 'react'

const FeedbackButton = ({ onClick }) => {
  const handleFeedbackClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action
      console.log('Feedback button clicked');
      alert('Thank you for your interest! Feedback feature coming soon.');
    }
  };

  return (
    <button 
      className="feedback-button"
      onClick={handleFeedbackClick}
      title="Give Feedback"
    >
      <span className="feedback-button-text">Feedback</span>
      💬
    </button>
  )
}

export default FeedbackButton
