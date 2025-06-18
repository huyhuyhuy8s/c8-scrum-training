import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import AddExpense from "./AddExpense";
import Card from "./Card";
import Action from "./Action";
import List from "./List";
import FeedbackButton from "./FeedbackButton";

const MainLayout = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [refreshList, setRefreshList] = useState(0); // Counter to trigger list refresh

  const handleCreateRequest = () => {
    console.log("Create new request");
    setEditingExpense(null); // Clear any existing expense data
    setShowAddExpense(true);
  };

  const handleEditExpense = (expenseData) => {
    console.log("Edit expense:", expenseData);
    setEditingExpense(expenseData);
    setShowAddExpense(true);
  };
  const handleCloseAddExpense = () => {
    setShowAddExpense(false);
    setEditingExpense(null); // Clear editing data when closing
    setRefreshList(prev => prev + 1); // Trigger list refresh
  };

  const handleFeedback = () => {
    console.log("Feedback submitted");
    alert("Thank you for your feedback! We appreciate your input.");
  };

  return (
    <>
      <NavigationBar />      {/* Main Content Area - with padding to account for fixed navbar */}
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
                className="modal-close-btn"
                aria-label="Close modal"
                title="Close (Esc)"
              >
                ×
              </button>
              <AddExpense 
                onClose={handleCloseAddExpense} 
                existingExpense={editingExpense}
                isEditing={!!editingExpense}
              />
            </div>
          </div>
        )}

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <Card title="CLAIMED (APPROVED/PAID)" count="7" subtitle="batch(s)" />

          <Card title="PENDING APPROVAL" count="3" subtitle="batch(s)" />

          <Card title="REJECTED" count="1" subtitle="batch(s)" />

          <Card title="IN PROGRESS" count="12" subtitle="batch(s)" />
        </div>
        {/* Action Section */}
        <Action
          title="Employees expense management"
          buttonText="Create a new request"
          onButtonClick={handleCreateRequest}
        />        {/* List Component */}
        <List onItemClick={handleEditExpense} key={refreshList} />
        {/* Feedback Button */}
        <FeedbackButton onClick={handleFeedback} />
      </div>
    </>
  );
};

export default MainLayout;
