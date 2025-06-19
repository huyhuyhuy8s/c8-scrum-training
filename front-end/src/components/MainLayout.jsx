import React, { useState, useCallback, useMemo } from "react";
import NavigationBar from "./NavigationBar";
import AddExpense from "./AddExpense";
import Card from "./Card";
import Action from "./Action";
import List from "./List";
import FeedbackButton from "./FeedbackButton";
import "../styles/MainLayout.css";

const MainLayout = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [refreshList, setRefreshList] = useState(0); // Counter to trigger list refresh
  const [activeFilters, setActiveFilters] = useState({});
  const [completeData, setCompleteData] = useState([]);
  const [activeCardFilter, setActiveCardFilter] = useState(null);
  const handleCreateRequest = useCallback(() => {
    console.log("Create new request");
    setEditingExpense(null); // Clear any existing expense data
    setShowAddExpense(true);
  }, []);

  const handleCloseAddExpense = useCallback(() => {
    setShowAddExpense(false);
    setEditingExpense(null); // Clear editing data when closing
    setRefreshList((prev) => prev + 1); // Trigger list refresh
  }, []);
  // Filter handling functions
  const handleCardFilter = useCallback(
    (filterValue) => {
      // If the same card is clicked again, remove the filter (toggle behavior)
      if (activeCardFilter === filterValue) {
        setActiveFilters({ ...activeFilters, status: "" });
        setActiveCardFilter(null);
        return;
      }

      let statusFilter = "";

      // Map card titles to status filters
      switch (filterValue) {
        case "approved":
          statusFilter = "approved";
          break;
        case "pending":
          statusFilter = "pending";
          break;
        case "rejected":
          statusFilter = "rejected";
          break;
        case "draft":
          statusFilter = "draft";
          break;
        default:
          statusFilter = "";
      }

      const newFilters = { ...activeFilters, status: statusFilter };
      setActiveFilters(newFilters);
      setActiveCardFilter(filterValue);
    },
    [activeFilters, activeCardFilter]
  );
  const handleFilterChange = useCallback((newFilters) => {
    setActiveFilters(newFilters);
    // Clear card filter if manual filter is applied
    setActiveCardFilter(null);
  }, []);

  const handleClearFilters = useCallback(() => {
    setActiveFilters({});
    setActiveCardFilter(null);
  }, []);
  const handleFilteredDataChange = useCallback(() => {
    // We don't need to store filtered data in MainLayout anymore
    // This callback can be used for future analytics or notifications
  }, []);

  const handleCompleteDataChange = useCallback((data) => {
    setCompleteData(data);
  }, []);
  // Get card counts based on complete data (not filtered)
  const cardCounts = useMemo(() => {
    const approved = completeData.filter(
      (item) => item.status === "approved" || item.status === "final approved"
    ).length;
    const pending = completeData.filter(
      (item) => item.status === "pending"
    ).length;
    const rejected = completeData.filter(
      (item) => item.status === "rejected"
    ).length;
    const draft = completeData.filter((item) => item.status === "draft").length;

    return { approved, pending, rejected, draft };
  }, [completeData]);

  return (
    <>
      <NavigationBar />{" "}
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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
        )}{" "}
        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <Card
            title="DRAFT"
            count={cardCounts.draft}
            subtitle="expense(s)"
            onClick={handleCardFilter}
            filterValue="draft"
            isActive={activeCardFilter === "draft"}
          />

          <Card
            title="PENDING"
            count={cardCounts.pending}
            subtitle="expense(s)"
            onClick={handleCardFilter}
            filterValue="pending"
            isActive={activeCardFilter === "pending"}
          />

          <Card
            title="APPROVED"
            count={cardCounts.approved}
            subtitle="expense(s)"
            onClick={handleCardFilter}
            filterValue="approved"
            isActive={activeCardFilter === "approved"}
          />

          <Card
            title="REJECTED"
            count={cardCounts.rejected}
            subtitle="expense(s)"
            onClick={handleCardFilter}
            filterValue="rejected"
            isActive={activeCardFilter === "rejected"}
          />
        </div>
        {/* Action Section */}
        <Action
          title="Employees expense management"
          buttonText="Create a new request"
          onButtonClick={handleCreateRequest}
        />{" "}
        {/* List Component */}
        <List
          filters={activeFilters}
          onFilteredDataChange={handleFilteredDataChange}
          onCompleteDataChange={handleCompleteDataChange}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          key={refreshList}
        />
        {/* Floating Feedback Button */}
        <FeedbackButton />
      </div>
    </>
  );
};

export default MainLayout;
