import React, { useState } from 'react';
import { FiMessageSquare, FiX, FiSend, FiStar } from 'react-icons/fi';
import { getCurrentUser } from '../services/authService';
import '../styles/feedback.css';

/**
 * FeedbackButton component with modal form for collecting user feedback
 * @param {Function} onClick - Optional callback for custom feedback handling
 */
const FeedbackButton = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    type: 'general',
    rating: 0,
    subject: '',
    message: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const currentUser = getCurrentUser();

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'improvement', label: 'Improvement Suggestion' },
    { value: 'other', label: 'Other' }
  ];

  const handleFeedbackClick = () => {
    if (onClick) {
      onClick();
    } else {
      setShowModal(true);
      // Pre-fill user email if logged in
      if (currentUser?.email) {
        setFeedbackForm(prev => ({
          ...prev,
          email: currentUser.email
        }));
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFeedbackForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFeedbackForm(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      console.log('Submitting feedback:', feedbackForm);
      
      // Here you would make an actual API call to submit feedback
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitSuccess(false);
        setFeedbackForm({
          type: 'general',
          rating: 0,
          subject: '',
          message: '',
          email: currentUser?.email || ''
        });
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmitSuccess(false);
    setFeedbackForm({
      type: 'general',
      rating: 0,
      subject: '',
      message: '',
      email: currentUser?.email || ''
    });
  };

  return (
    <>
      <button 
        className="feedback-button"
        onClick={handleFeedbackClick}
        title="Give Feedback"
        aria-label="Open feedback form"
      >
        <FiMessageSquare className="feedback-icon" aria-hidden="true" />
        <span className="feedback-button-text">Feedback</span>
      </button>

      {showModal && (
        <div className="feedback-modal-overlay" onClick={handleCloseModal}>
          <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
            <div className="feedback-modal-header">
              <h2 className="feedback-modal-title">
                <FiMessageSquare className="feedback-modal-icon" />
                Send Feedback
              </h2>
              <button
                className="feedback-modal-close"
                onClick={handleCloseModal}
                aria-label="Close feedback form"
              >
                <FiX />
              </button>
            </div>

            {submitSuccess ? (
              <div className="feedback-success">
                <div className="feedback-success-icon">✅</div>
                <h3>Thank you for your feedback!</h3>
                <p>We appreciate your input and will review it shortly.</p>
              </div>
            ) : (
              <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="feedback-form-group">
                  <label htmlFor="feedback-type" className="feedback-label">
                    Feedback Type
                  </label>
                  <select
                    id="feedback-type"
                    className="feedback-select"
                    value={feedbackForm.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  >
                    {feedbackTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="feedback-form-group">
                  <label className="feedback-label">
                    Overall Rating (Optional)
                  </label>
                  <div className="feedback-rating">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        className={`feedback-star ${feedbackForm.rating >= star ? 'active' : ''}`}
                        onClick={() => handleRatingClick(star)}
                        aria-label={`Rate ${star} stars`}
                      >
                        <FiStar />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="feedback-form-group">
                  <label htmlFor="feedback-subject" className="feedback-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="feedback-subject"
                    className="feedback-input"
                    value={feedbackForm.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Brief description of your feedback"
                    required
                  />
                </div>

                <div className="feedback-form-group">
                  <label htmlFor="feedback-message" className="feedback-label">
                    Message
                  </label>
                  <textarea
                    id="feedback-message"
                    className="feedback-textarea"
                    value={feedbackForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please provide detailed feedback..."
                    rows="4"
                    required
                  />
                </div>

                <div className="feedback-form-group">
                  <label htmlFor="feedback-email" className="feedback-label">
                    Email (for follow-up)
                  </label>
                  <input
                    type="email"
                    id="feedback-email"
                    className="feedback-input"
                    value={feedbackForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="feedback-form-actions">
                  <button
                    type="button"
                    className="feedback-button-secondary"
                    onClick={handleCloseModal}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="feedback-button-primary"
                    disabled={isSubmitting || !feedbackForm.subject.trim() || !feedbackForm.message.trim()}
                  >
                    {isSubmitting ? (
                      <span className="feedback-loading">Sending...</span>
                    ) : (
                      <>
                        <FiSend />
                        Send Feedback
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackButton;
