import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Card from "./Card";
import ManagerAction from "./ManagerAction";
import List from "./List";
import FeedbackButton from "./FeedbackButton";
import "../styles/MainLayout.css";

const FinanceLayout = () => {
  const [selectedRequests, setSelectedRequests] = useState([]);

  const handleApprove = () => {
    if (selectedRequests.length === 0) {
      alert('Please select requests to approve for payment processing');
      return;
    }
    console.log('Finance approving requests:', selectedRequests);
    alert(`Approved ${selectedRequests.length} request(s) for payment processing!`);
    setSelectedRequests([]);
  };

  const handleReject = () => {
    if (selectedRequests.length === 0) {
      alert('Please select requests to reject');
      return;
    }
    const reason = prompt('Please provide a reason for final rejection:');
    if (reason && reason.trim()) {
      console.log('Finance rejecting requests:', selectedRequests, 'Reason:', reason);
      alert(`Rejected ${selectedRequests.length} request(s) with reason: "${reason}"`);
      setSelectedRequests([]);
    } else if (reason !== null) {
      alert('Rejection reason is required.');
    }
  };

  const handleRequestSelection = (requestId, isSelected) => {
    if (isSelected) {
      setSelectedRequests(prev => [...prev, requestId]);
    } else {
      setSelectedRequests(prev => prev.filter(id => id !== requestId));
    }
  };

  const handleFeedback = () => {
    console.log("Finance feedback submitted");
    alert("Thank you for your feedback! We appreciate your input.");
  };
  // Finance-specific data - requests with pending, approved, or rejected status
  const expenseRequestsData = [
    // Pending requests - waiting for finance review
    {
      id: 4,
      date: "2025-06-17",
      employee: {
        name: "John Smith",
        department: "IT"
      },
      category: "Transportation",
      amount: "$500.00",
      status: "pending",
      statusText: "Pending"
    },
    {
      id: 5,
      date: "2025-06-16",
      employee: {
        name: "Sarah Johnson",
        department: "Marketing"
      },
      category: "Client Entertainment",
      amount: "$275.50",
      status: "pending",
      statusText: "Pending"
    },
    {
      id: 8,
      date: "2025-06-13",
      employee: {
        name: "Michael Chen",
        department: "Sales"
      },
      category: "Meals & Accommodation",
      amount: "$125.50",
      status: "pending",
      statusText: "Pending"
    },
    {
      id: 19,
      date: "2025-06-02",
      employee: {
        name: "Carlos Santos",
        department: "Security"
      },
      category: "Security Tools & Software",
      amount: "$1,100.00",
      status: "pending",
      statusText: "Pending"
    },
    // Approved requests - finance approved
    {
      id: 6,
      date: "2025-06-15",
      employee: {
        name: "David Brown",
        department: "Finance"
      },
      category: "Business Travel",
      amount: "$890.00",
      status: "approved",
      statusText: "Finance"
    },
    {
      id: 21,
      date: "2025-05-30",
      employee: {
        name: "Alex Thompson",
        department: "Customer Success"
      },
      category: "Customer Visit Travel",
      amount: "$650.00",
      status: "approved",
      statusText: "Finance"
    },
    {
      id: 26,
      date: "2025-06-10",
      employee: {
        name: "Lisa Wang",
        department: "Product Management"
      },
      category: "Market Research Tools",
      amount: "$499.00",
      status: "approved",
      statusText: "Finance"
    },
    // Rejected requests - finance rejected
    {
      id: 7,
      date: "2025-06-14",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing"
      },
      category: "Equipment Purchase",
      amount: "$2,450.75",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 22,
      date: "2025-05-29",
      employee: {
        name: "Grace Kim",
        department: "UX/UI Design"
      },
      category: "Design Software License",
      amount: "$199.00",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 32,
      date: "2025-05-25",
      employee: {
        name: "Rachel Green",
        department: "Marketing"
      },
      category: "Advertising Campaign",
      amount: "$2,500.00",
      status: "rejected",
      statusText: "Rejected"
    }
  ];

  return (
    <>
      <NavigationBar />
      
      {/* Main Content Area */}
      <div className="main-layout">        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <Card title="PENDING" count="4" subtitle="request(s)" />
          <Card title="APPROVED" count="3" subtitle="request(s)" />
          <Card title="REJECTED" count="3" subtitle="request(s)" />
        </div>

        {/* Finance Action Section */}
        <ManagerAction
          title="Finance Final Approval"
          selectedCount={selectedRequests.length}
          onAccept={handleApprove}
          onReject={handleReject}
        />

        {/* All Expense Requests List */}
        <List 
          title="Expense Requests - Finance Review"
          data={expenseRequestsData}
          isManagerView={true}
          isFinanceView={true}
          onRequestSelection={handleRequestSelection}
          selectedRequests={selectedRequests}
        />

        {/* Feedback Button */}
        <FeedbackButton onClick={handleFeedback} />
      </div>
    </>
  );
};

export default FinanceLayout;
