import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import AddExpense from "./AddExpense";
import Card from "./Card";
import Action from "./Action";
import List from "./List";
import FeedbackButton from "./FeedbackButton";

const MainLayout = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [filterStatus, setFilterStatus] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

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
      <div
        style={{
          margin: 0,
          padding: "20px",
          paddingTop: "calc(15vh + 20px)", // Account for fixed navbar height
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          width: "100vw",
          boxSizing: "border-box",
        }}
      >
        {" "}
        {/* Add Expense Modal/Overlay */}
        {showAddExpense && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1001,
            }}
            onClick={handleCloseAddExpense}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-expense-title"
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "0px",
                maxWidth: "500px",
                width: "90%",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
                boxShadow: "0 4px 32px rgba(0, 0, 0, 0.15)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {" "}
              <button
                onClick={handleCloseAddExpense}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#666",
                  zIndex: 10,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "stretch",
            marginBottom: "20px",
          }}
        >
          <Card title="DRAFT" count="1" subtitle="batch(s)" onClick={() => setFilterStatus('draft')} />
          <Card title="PENDING" count="3" subtitle="batch(s)" onClick={() => setFilterStatus('pending')} />
          <Card title="APPROVED" count="4" subtitle="batch(s)" onClick={() => setFilterStatus('approved')} />
          <Card title="REJECTED" count="1" subtitle="batch(s)" onClick={() => setFilterStatus('rejected')} />
        </div>
        {/* Action Section */}
        <Action
          title="Employees expense management"
          buttonText="Create a new request"
          onButtonClick={handleCreateRequest}
          onRefresh={() => {
            setFilterStatus(null);
            setRefreshKey(prev => prev + 1);
          }}
        />
        {/* List Component */}
        <List filterStatus={filterStatus} key={refreshKey} />
        {/* Feedback Button */}
        <FeedbackButton onClick={handleFeedback} />
      </div>
    </>
  );
};

export default MainLayout;
