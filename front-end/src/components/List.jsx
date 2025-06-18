import React from 'react'

const List = ({ title = "Recent Activities", data = [], filterStatus }) => {  // Sample data if no data is provided
  const sampleData = [
    {
      id: 1,
      date: "2025-06-15",
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
      id: 2,
      date: "2025-06-14",
      employee: {
        name: "Sarah Johnson",
        department: "Marketing"
      },
      category: "Meals",
      amount: "$75.50",
      status: "approved",
      statusText: "Claimed"
    },
    {
      id: 3,
      date: "2025-06-13",
      employee: {
        name: "Mike Wilson",
        department: "Sales"
      },
      category: "Accommodation",
      amount: "$320.00",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 4,
      date: "2025-06-12",
      employee: {
        name: "Emily Davis",
        department: "HR"
      },
      category: "Office Supplies",
      amount: "$150.25",
      status: "approved",
      statusText: "Claimed"
    },
    {
      id: 5,
      date: "2025-06-11",
      employee: {
        name: "David Brown",
        department: "Finance"
      },
      category: "Transportation",
      amount: "$890.00",
      status: "pending",
      statusText: "Pending"
    },
    {
      id: 6,
      date: "2025-06-10",
      employee: {
        name: "Lisa Anderson",
        department: "IT"
      },
      category: "Software License",
      amount: "$1,200.00",
      status: "approved",
      statusText: "Claimed"
    },
    {
      id: 7,
      date: "2025-06-09",
      employee: {
        name: "Robert Taylor",
        department: "Operations"
      },
      category: "Equipment",
      amount: "$450.75",
      status: "pending",
      statusText: "Pending"
    },
    {
      id: 8,
      date: "2025-06-08",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing"
      },
      category: "Advertising",
      amount: "$2,500.00",
      status: "approved",
      statusText: "Claimed"
    },
    {
      id: 9,
      date: "2025-06-07",
      employee: {
        name: "Anna Draft",
        department: "Admin"
      },
      category: "Draft Example",
      amount: "$0.00",
      status: "draft",
      statusText: "Draft"
    }
  ];

  let displayData = data.length > 0 ? data : sampleData;
  if (filterStatus) {
    if (filterStatus === 'raft') {
      // Giả sử status "raft" là những item chưa có trạng thái (hoặc status === 'raft' nếu có)
      displayData = displayData.filter(item => item.status === 'raft');
    } else {
      displayData = displayData.filter(item => item.status === filterStatus);
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending':
        return 'pending';
      case 'approved':
        return 'approved';
      case 'rejected':
        return 'rejected';
      case 'draft':
        return 'draft';
      default:
        return 'pending';
    }
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <span className="list-icon">📊</span>
        <h2 className="list-title">{title}</h2>
      </div>
      
      <table className="list-table">
        <thead className="list-table-header">          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item) => (
            <tr key={item.id} className="list-table-row">
              <td className="list-table-cell">
                <span className="list-date">{item.date}</span>
              </td>
              <td className="list-table-cell">
                <div>
                  <div className="list-employee-name">{item.employee.name}</div>
                  <div className="list-employee-dept">{item.employee.department}</div>
                </div>
              </td>
              <td className="list-table-cell">
                <span className="list-category">{item.category}</span>
              </td>
              <td className="list-table-cell">
                <span className="list-amount">{item.amount}</span>
              </td>
              <td className="list-table-cell">
                <span className={`list-status ${getStatusClass(item.status)}`}>
                  {item.statusText}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List