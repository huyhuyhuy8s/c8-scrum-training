import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import AddExpense from "./AddExpense";
import Card from "./Card";
import Action from "./Action";
import List from "./List";
import FeedbackButton from "./FeedbackButton";
import "../styles/MainLayout.css";

const MainLayout = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const handleCreateRequest = () => {
    console.log("Create new request");
    setShowAddExpense(true);
  };

  const handleCloseAddExpense = () => {
    setShowAddExpense(false);
  };

  const handleFeedback = () => {
    console.log("Feedback submitted");
    alert("Thank you for your feedback! We appreciate your input.");
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
          <Card title="DRAFT" count="7" subtitle="batch(s)" />

          <Card title="PENDING" count="3" subtitle="batch(s)" />

          <Card title="CLAIMED" count="1" subtitle="batch(s)" />

          <Card title="REJECTED" count="12" subtitle="batch(s)" />
        </div>
        {/* Action Section */}
        <Action
          title="Employees expense management"
          buttonText="Create a new request"
          onButtonClick={handleCreateRequest}
        />
        {/* List Component */}
        <List />
        {/* Feedback Button */}
        <FeedbackButton onClick={handleFeedback} />
      </div>
    </>
  );
};

export default MainLayout;
