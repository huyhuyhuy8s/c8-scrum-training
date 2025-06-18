import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Card from "./Card";
import FinanceAction from "./FinanceAction";
import List from "./List";
import FeedbackButton from "./FeedbackButton";
import SummaryPopup from "./SummaryPopup"; // Import the popup component
import { FiDownload, FiCalendar } from "react-icons/fi";
import "../styles/MainLayout.css";
import "../styles/SummaryPopup.css";

const FinanceLayout = () => {
  const [exportStartDate, setExportStartDate] = useState('');
  const [exportEndDate, setExportEndDate] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [departmentSummary, setDepartmentSummary] = useState(null);
  const [employeeSummary, setEmployeeSummary] = useState(null);
  const [showSummaryPopup, setShowSummaryPopup] = useState(false);

  const handleSummary = () => {
    const approvedRequests = expenseRequestsData.filter(
      (request) => request.status === 'approved'
    );

    const deptSummary = approvedRequests.reduce((acc, request) => {
      const { department } = request.employee;
      const amount = parseFloat(request.amount.replace(/[^\d.-]/g, ''));

      if (!acc[department]) {
        acc[department] = 0;
      }
      acc[department] += amount;
      return acc;
    }, {});

    const empSummary = approvedRequests.reduce((acc, request) => {
      const { name } = request.employee;
      const amount = parseFloat(request.amount.replace(/[^\d.-]/g, ''));

      if (!acc[name]) {
        acc[name] = 0;
      }
      acc[name] += amount;
      return acc;
    }, {});

    setDepartmentSummary(deptSummary);
    setEmployeeSummary(empSummary);
    setShowSummaryPopup(true);
  };

  const handleCloseSummary = () => {
    setShowSummaryPopup(false);
    setDepartmentSummary(null);
    setEmployeeSummary(null);
  };

  const handleFeedback = () => {
    console.log("Finance feedback submitted");
    alert("Thank you for your feedback! We appreciate your input.");
  };

  const handleDateFilter = () => {
    if (!filterStartDate || !filterEndDate) {
      alert('Please select both start and end dates');
      return;
    }

    const startDate = new Date(filterStartDate);
    const endDate = new Date(filterEndDate);
    
    if (startDate > endDate) {
      alert('Start date cannot be after end date');
      return;
    }

    // Filter data based on date range
    const filtered = expenseRequestsData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredData(filtered);
    console.log(`Filtered ${filtered.length} requests between ${filterStartDate} and ${filterEndDate}`);
    alert(`Found ${filtered.length} requests in the selected date range`);
  };

  const clearDateFilter = () => {
    setFilterStartDate('');
    setFilterEndDate('');
    setFilteredData([]);
    console.log('Date filter cleared');
  };

  const handleExport = async () => {
    if (!exportStartDate || !exportEndDate) {
      alert('Please select both start and end dates for export');
      return;
    }

    if (new Date(exportStartDate) > new Date(exportEndDate)) {
      alert('Start date cannot be later than end date');
      return;
    }

    try {
      setIsExporting(true);
      
      // Filter approved requests within date range
      const filteredData = expenseRequestsData.filter(request => {
        const requestDate = new Date(request.date);
        const startDate = new Date(exportStartDate);
        const endDate = new Date(exportEndDate);
        
        return request.status === 'finance_approved' && 
               requestDate >= startDate && 
               requestDate <= endDate;
      });

      if (filteredData.length === 0) {
        alert('No approved requests found in the selected date range');
        return;
      }

      // Generate CSV content
      const csvContent = generateCSV(filteredData);
      
      // Download CSV file
      downloadCSV(csvContent, `approved_requests_${exportStartDate}_to_${exportEndDate}.csv`);
      
      alert(`Successfully exported ${filteredData.length} approved request(s)`);
      
    } catch (error) {
      console.error('Export error:', error);
      alert('Error occurred during export. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const generateCSV = (data) => {
    const headers = [
      'Request ID',
      'Date',
      'Employee Name',
      'Department', 
      'Category',
      'Amount',
      'Status',
      'Approved Date'
    ];

    const csvRows = [
      headers.join(','),
      ...data.map(row => [
        row.id,
        row.date,
        `"${row.employee.name}"`,
        `"${row.employee.department}"`,
        `"${row.category}"`,
        row.amount,
        row.statusText,
        row.approvedDate || row.date
      ].join(','))
    ];

    return csvRows.join('\n');
  };

  const downloadCSV = (csvContent, filename) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
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
      },      category: "Advertising Campaign",
      amount: "$2,500.00",
      status: "rejected",
      statusText: "Rejected"
    },
    // Finance approved requests for testing export
    {
      id: 33,
      date: "2025-06-10",
      employee: {
        name: "Lisa Wang",
        department: "Product Management"
      },
      category: "Market Research Tools",
      amount: "$499.00",
      status: "finance_approved",
      statusText: "Finance Approved",
      approvedDate: "2025-06-11"
    },
    {
      id: 34,
      date: "2025-06-08",
      employee: {
        name: "Mark Johnson",
        department: "Sales"
      },
      category: "Client Presentation",
      amount: "$320.75",
      status: "finance_approved",
      statusText: "Finance Approved", 
      approvedDate: "2025-06-09"
    },
    {
      id: 35,
      date: "2025-06-05",
      employee: {
        name: "Sophie Chen",
        department: "HR"
      },
      category: "Team Building Event",
      amount: "$1,200.00",
      status: "finance_approved",
      statusText: "Finance Approved",
      approvedDate: "2025-06-06"
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
        </div>        {/* Finance Action Section with Date Filter */}
        <FinanceAction
          startDate={filterStartDate}
          endDate={filterEndDate}
          onStartDateChange={setFilterStartDate}
          onEndDateChange={setExportEndDate}
          onDateFilter={handleDateFilter}
          onClearFilter={clearDateFilter}
          onSummary={handleSummary}
        />        {/* All Expense Requests List */}
        <div className="request-list-container">
          <List
            items={filteredData.length > 0 ? filteredData : expenseRequestsData}
            userRole="finance"
          />
        </div>

        {showSummaryPopup && (
          <SummaryPopup 
            departmentSummary={departmentSummary} 
            employeeSummary={employeeSummary} 
            onClose={handleCloseSummary} 
          />
        )}

        {/* Export Section */}
        <div className="export-container">
          <h2>Export Approved Requests</h2>
          <div className="date-range">
            <div className="date-picker">
              <label>Start Date:</label>
              <input 
                type="date" 
                value={exportStartDate} 
                onChange={(e) => setExportStartDate(e.target.value)} 
              />
            </div>
            <div className="date-picker">
              <label>End Date:</label>
              <input 
                type="date" 
                value={exportEndDate} 
                onChange={(e) => setExportEndDate(e.target.value)} 
              />
            </div>
          </div>
          <button 
            className="export-button" 
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? 'Exporting...' : <><FiDownload /> Export to CSV</>}
          </button>
        </div>
      </div>
    </>
  );
};

export default FinanceLayout;
