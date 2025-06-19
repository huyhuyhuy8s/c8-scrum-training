import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Card from "./Card";
import ManagerAction from "./ManagerAction";
import List from "./List";
import FeedbackButton from "./FeedbackButton";
import "../styles/MainLayout.css";

const ManagerLayout = () => {
  const [selectedRequests, setSelectedRequests] = useState([]);

  const handleAccept = () => {
    if (selectedRequests.length === 0) {
      alert("Please select requests to approve");
      return;
    }
    console.log("Accepting requests:", selectedRequests);
    alert(`Approved ${selectedRequests.length} request(s) successfully!`);
    setSelectedRequests([]);
  };

  const handleReject = () => {
    if (selectedRequests.length === 0) {
      alert("Please select requests to reject");
      return;
    }
    const reason = prompt("Please provide a reason for rejection:");
    if (reason && reason.trim()) {
      console.log("Rejecting requests:", selectedRequests, "Reason:", reason);
      alert(
        `Rejected ${selectedRequests.length} request(s) with reason: "${reason}"`
      );
      setSelectedRequests([]);
    } else if (reason !== null) {
      alert("Rejection reason is required.");
    }
  };

  const handleRequestSelection = (requestId, isSelected) => {
    if (isSelected) {
      setSelectedRequests((prev) => [...prev, requestId]);
    } else {
      setSelectedRequests((prev) => prev.filter((id) => id !== requestId));
    }
  };

  const handleFeedback = () => {
    console.log("Manager feedback submitted");
    alert("Thank you for your feedback! We appreciate your input.");
  }; // Manager-specific data - all expense requests for review (various statuses)
  const expenseRequestsData = [
    {
      id: 4,
      date: "2025-06-17",
      employee: {
        name: "John Smith",
        department: "IT",
      },
      category: "Transportation",
      amount: "$500.00",
      status: "pending",
      statusText: "Pending",
    },
    {
      id: 5,
      date: "2025-06-16",
      employee: {
        name: "Sarah Johnson",
        department: "Marketing",
      },
      category: "Client Entertainment",
      amount: "$275.50",
      status: "pending",
      statusText: "Pending",
    },
    {
      id: 6,
      date: "2025-06-15",
      employee: {
        name: "David Brown",
        department: "Finance",
      },
      category: "Business Travel",
      amount: "$890.00",
      status: "approved",
      statusText: "Approved",
    },
    {
      id: 7,
      date: "2025-06-14",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing",
      },
      category: "Equipment Purchase",
      amount: "$2,450.75",
      status: "rejected",
      statusText: "Rejected",
    },
    {
      id: 8,
      date: "2025-06-13",
      employee: {
        name: "Michael Chen",
        department: "Sales",
      },
      category: "Meals & Accommodation",
      amount: "$125.50",
      status: "pending",
      statusText: "Pending",
    },
    {
      id: 9,
      date: "2025-06-12",
      employee: {
        name: "Emma Wilson",
        department: "Operations",
      },
      category: "Conference & Events",
      amount: "$850.00",
      status: "claimed",
      statusText: "Claimed",
    },
    {
      id: 19,
      date: "2025-06-02",
      employee: {
        name: "Carlos Santos",
        department: "Security",
      },
      category: "Security Tools & Software",
      amount: "$1,100.00",
      status: "pending",
      statusText: "Pending",
    },
    {
      id: 21,
      date: "2025-05-30",
      employee: {
        name: "Alex Thompson",
        department: "Customer Success",
      },
      category: "Customer Visit Travel",
      amount: "$650.00",
      status: "approved",
      statusText: "Approved",
    },
    {
      id: 22,
      date: "2025-05-29",
      employee: {
        name: "Grace Kim",
        department: "UX/UI Design",
      },
      category: "Design Software License",
      amount: "$199.00",
      status: "rejected",
      statusText: "Rejected",
    },
    {
      id: 23,
      date: "2025-05-28",
      employee: {
        name: "Daniel Martinez",
        department: "DevOps",
      },
      category: "Cloud Infrastructure",
      amount: "$1,800.00",
      status: "pending",
      statusText: "Pending",
    },
    {
      id: 24,
      date: "2025-05-27",
      employee: {
        name: "Olivia Chang",
        department: "Content Marketing",
      },
      category: "Content Creation Tools",
      amount: "$349.99",
      status: "claimed",
      statusText: "Claimed",
    },
    {
      id: 25,
      date: "2025-05-26",
      employee: {
        name: "Ryan O'Connor",
        department: "Business Development",
      },
      category: "Industry Conference",
      amount: "$1,250.00",
      status: "pending",
      statusText: "Pending",
    },
  ];

  return (
    <>
      <NavigationBar />

      {/* Main Content Area */}
      <div className="main-layout">
        {" "}
        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <Card title="PENDING" count="6" subtitle="request(s)" />
          <Card title="APPROVED" count="2" subtitle="request(s)" />
          <Card title="REJECTED" count="2" subtitle="request(s)" />
        </div>
        {/* Manager Action Section */}
        <ManagerAction
          title="Manager Expense Review"
          selectedCount={selectedRequests.length}
          onAccept={handleAccept}
          onReject={handleReject}
        />{" "}
        {/* All Expense Requests List */}
        <List
          title="All Expense Requests"
          data={expenseRequestsData}
          isManagerView={true}
          onRequestSelection={handleRequestSelection}
          selectedRequests={selectedRequests}
        />
        {/* Feedback Button */}
        <FeedbackButton onClick={handleFeedback} />
      </div>
    </>
  );
};

export default ManagerLayout;
