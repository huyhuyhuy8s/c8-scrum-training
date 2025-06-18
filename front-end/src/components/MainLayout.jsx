import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import AddExpense from "./AddExpense";
import Card from "./Card";
import Action from "./Action";
import List from "./List";
import FeedbackButton from "./FeedbackButton";
import "../styles/MainLayout.css";

const MainLayout = ({ userRole = 'employee' }) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const handleCreateRequest = () => {
    console.log("Create new request");
    setShowAddExpense(true);
  };

  const handleAcceptRequest = () => {
    console.log("Accept request");
    alert("Request has been accepted!");
  };

  const handleRejectRequest = () => {
    console.log("Reject request");
    alert("Request has been rejected!");
  };

  const handleCloseAddExpense = () => {
    setShowAddExpense(false);
  };

  const handleFeedback = () => {
    console.log("Feedback submitted");
    alert("Thank you for your feedback! We appreciate your input.");
  };

  // Define buttons based on user role
  const getActionButtons = () => {
    if (userRole === 'manager') {
      return [
        {
          text: "Accept",
          icon: "✓",
          className: "action-accept-button",
          onClick: handleAcceptRequest,
          title: "Accept selected requests"
        },
        {
          text: "Reject",
          icon: "✗",
          className: "action-reject-button", 
          onClick: handleRejectRequest,
          title: "Reject selected requests"
        }
      ];
    } else {
      return [
        {
          text: "Create a new request",
          icon: "+",
          className: "action-create-button",
          onClick: handleCreateRequest,
          title: "Create a new expense request"
        }
      ];
    }
  };

  const getActionTitle = () => {
    return userRole === 'manager' 
      ? "Expense requests management" 
      : "Employees expense management";
  };
  return (
    <>
      <NavigationBar />
      
      {/* Main Content Area - with padding to account for fixed navbar */}
      <div className="main-layout">
        {/* Add Expense Modal/Overlay */}
        {showAddExpense && (
          <div
            className="modal-overlay"
            onClick={handleCloseAddExpense}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-expense-title"
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseAddExpense}
                className="modal-close-button"
                aria-label="Close modal"
                title="Close (Esc)"
              >
                ×
              </button>
              <AddExpense onClose={handleCloseAddExpense} />
            </div>
          </div>
        )}
          {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <Card title="PENDING" count="3" subtitle="batch(s)" />

          <Card title="CLAIMED" count="7" subtitle="batch(s)" />

          <Card title="REJECTED" count="1" subtitle="batch(s)" />

          <Card title="TOTAL" count="11" subtitle="batch(s)" />
        </div>{/* Action Section */}
        <Action
          title={getActionTitle()}
          buttons={getActionButtons()}
          userRole={userRole}
        />
        {/* List Component */}
        <List userRole={userRole} />
        {/* Feedback Button */}
        <FeedbackButton onClick={handleFeedback} />
      </div>
    </>
  );
};

export default MainLayout;
