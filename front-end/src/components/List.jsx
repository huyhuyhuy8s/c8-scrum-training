import React, { useState } from 'react'
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi'
import AddExpense from './AddExpense'
import '../styles/List.css'

const List = ({ 
  title = "Recent Activities", 
  data = [], 
  isManagerView = false,
  isFinanceView = false, 
  onRequestSelection = null, 
  selectedRequests = [] 
}) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)
    // Sample data if no data is provided
  const sampleData = [
    // Draft requests - Employee can edit/delete
    {
      id: 1,
      date: "2025-06-20",
      employee: {
        name: "Alice Cooper",
        department: "Design"
      },
      amount: "$299.00",
      status: "draft",
      statusText: "Draft"
    },
    {
      id: 2,
      date: "2025-06-19",
      employee: {
        name: "Tom Rodriguez",
        department: "Engineering"
      },
      amount: "$1,450.00",
      status: "draft",
      statusText: "Draft"
    },
    {
      id: 3,
      date: "2025-06-18",
      employee: {
        name: "Maria Gonzalez",
        department: "Quality Assurance"
      },
      amount: "$89.95",
      status: "draft",
      statusText: "Draft"
    },
    
    // Pending Manager
    {
      id: 4,
      date: "2025-06-17",
      employee: {
        name: "John Smith",
        department: "IT"
      },
      amount: "$500.00",
      status: "pending",
      statusText: "Pending Manager"
    },
    {
      id: 5,
      date: "2025-06-16",
      employee: {
        name: "Sarah Johnson",
        department: "Marketing"
      },
      amount: "$275.50",
      status: "pending",
      statusText: "Pending Manager"
    },
    {
      id: 6,
      date: "2025-06-15",
      employee: {
        name: "David Brown",
        department: "Finance"
      },
      amount: "$890.00",
      status: "pending",
      statusText: "Pending Manager"
    },
    {
      id: 7,
      date: "2025-06-14",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing"
      },
      amount: "$2,450.75",
      status: "pending",
      statusText: "Pending Manager"
    },
    {
      id: 8,
      date: "2025-06-13",
      employee: {
        name: "Michael Chen",
        department: "Sales"
      },
      amount: "$125.50",
      status: "pending",
      statusText: "Pending Manager"
    },
    {
      id: 9,
      date: "2025-06-12",
      employee: {
        name: "Emma Wilson",
        department: "Operations"
      },
      amount: "$850.00",
      status: "pending",
      statusText: "Pending Manager"
    },
    
    // Approved requests
    {
      id: 10,
      date: "2025-06-11",
      employee: {
        name: "Lisa Anderson",
        department: "IT"
      },
      amount: "$1,200.00",
      status: "approved",
      statusText: "Approved"
    },
    {
      id: 11,
      date: "2025-06-10",
      employee: {
        name: "Robert Taylor",
        department: "Operations"
      },
      amount: "$750.00",
      status: "approved",
      statusText: "Approved"
    },
    {
      id: 12,
      date: "2025-06-09",
      employee: {
        name: "Emily Davis",
        department: "HR"
      },
      amount: "$150.25",
      status: "approved",
      statusText: "Approved"
    },
    {
      id: 13,
      date: "2025-06-08",
      employee: {
        name: "Kevin Park",
        department: "Legal"
      },
      amount: "$3,200.00",
      status: "approved",
      statusText: "Approved"
    },
    {
      id: 14,
      date: "2025-06-07",
      employee: {
        name: "Amanda White",
        department: "Marketing"
      },
      amount: "$5,500.00",
      status: "approved",
      statusText: "Approved"
    },
    
    // Rejected requests
    {
      id: 15,
      date: "2025-06-06",
      employee: {
        name: "Mike Wilson",
        department: "Sales"
      },
      amount: "$320.00",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 16,
      date: "2025-06-05",
      employee: {
        name: "Rachel Green",
        department: "Customer Support"
      },
      amount: "$450.00",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 17,
      date: "2025-06-04",
      employee: {
        name: "James Miller",
        department: "Research & Development"
      },
      amount: "$1,850.00",
      status: "rejected",
      statusText: "Rejected"
    },
      // More diverse categories and departments
    {
      id: 18,
      date: "2025-06-03",
      employee: {
        name: "Sophie Turner",
        department: "Product Management"
      },
      amount: "$680.00",
      status: "approved",
      statusText: "Approved"
    },
    {
      id: 19,
      date: "2025-06-02",
      employee: {
        name: "Carlos Santos",
        department: "Security"
      },
      amount: "$1,100.00",
      status: "pending",
      statusText: "Pending Manager"
    },
    {
      id: 20,
      date: "2025-06-01",
      employee: {
        name: "Nina Patel",
        department: "Business Intelligence"
      },
      amount: "$2,200.00",
      status: "draft",
      statusText: "Draft"
    },
    
    // Additional rejected requests for testing
    {
      id: 21,
      date: "2025-05-31",
      employee: {
        name: "Alex Johnson",
        department: "Engineering"
      },

      amount: "$1,299.99",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 22,
      date: "2025-05-30",
      employee: {
        name: "Isabella Garcia",
        department: "Design"
      },
      amount: "$750.00",
      status: "rejected",
      statusText: "Rejected"
    },
    {
      id: 23,
      date: "2025-05-29",
      employee: {
        name: "Daniel Kim",
        department: "Operations"
      },
      amount: "$85.75",
      status: "rejected",
      statusText: "Rejected"
    },
    
    
    // Additional mixed status for variety
    {
      id: 28,
      date: "2025-05-24",
      employee: {
        name: "Grace Liu",
        department: "Quality Assurance"
      },
      amount: "$420.00",
      status: "rejected",
      statusText: "Rejected"
    },
    
    {
      id: 30,
      date: "2025-05-22",
      employee: {
        name: "Sophia Chen",
        department: "Research & Development"
      },
      amount: "$3,750.00",
      status: "rejected",
      statusText: "Rejected"
    }
  ];
  const displayData = data.length > 0 ? data : sampleData;

  const handleRowClick = (expense) => {
    setSelectedExpense(expense)
    setShowModal(true)
  }
  const handleUpdate = (e, item) => {
    e.stopPropagation() // Prevent row click
    
    // Only allow update for draft status
    if (item.status !== 'draft') {
      console.log(`Cannot update item with status: ${item.status}`)
      return;
    }
    
    console.log(`Update item with ID: ${item.id}`)
    alert(`Update feature for "${item.employee.name}" will be available soon!`)
  }
  const handleDelete = (e, item) => {
    e.stopPropagation() // Prevent row click
    
    // Only allow delete for draft status
    if (item.status !== 'draft') {
      console.log(`Cannot delete item with status: ${item.status}`)
      return;
    }
    
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the expense record for "${item.employee.name}"?\n\nThis action cannot be undone.`
    )
    
    if (confirmDelete) {
      console.log(`Delete item with ID: ${item.id}`)
      alert(`Expense record for "${item.employee.name}" has been deleted successfully!`)
      // Here you would typically call an API to delete the item
      // or update the state to remove the item from the list
    }
  }
  const handleCheckboxChange = (id, isChecked) => {
    if (onRequestSelection) {
      onRequestSelection(id, isChecked)
    }
  }

  const handleIndividualAccept = (e, item) => {
    e.stopPropagation()
      // Check status based on view type
    if (isFinanceView) {
      // Finance can only approve pending requests
      if (item.status !== 'pending') {
        console.log(`Finance cannot approve item with status: ${item.status}`)
        return
      }
    } else {
      // Manager can only approve pending requests
      if (item.status !== 'pending') {
        console.log(`Manager cannot accept item with status: ${item.status}`)
        return
      }
    }
      const actionText = isFinanceView ? 'approve' : 'approve';
    const confirmAccept = window.confirm(
      `Are you sure you want to ${actionText} the expense request for "${item.employee.name}"?\n\nAmount: ${item.amount}\nCategory: ${item.category}`
    )
    
    if (confirmAccept) {
      console.log(`${isFinanceView ? 'Finance approving' : 'Manager accepting'} individual request with ID: ${item.id}`)
      const successMessage = isFinanceView 
        ? `Expense request for "${item.employee.name}" has been approved by Finance!`
        : `Expense request for "${item.employee.name}" has been approved successfully!`;      alert(successMessage)
      // Here you would typically call an API to update the item status
    }
  }

  const handleIndividualReject = (e, item) => {
    e.stopPropagation()
      // Check status based on view type
    if (isFinanceView) {
      // Finance can only reject pending requests
      if (item.status !== 'pending') {
        console.log(`Finance cannot reject item with status: ${item.status}`)
        return
      }
    } else {
      // Manager can only reject pending requests
      if (item.status !== 'pending') {
        console.log(`Manager cannot reject item with status: ${item.status}`)
        return
      }
    }
      const actionText = isFinanceView ? 'rejection' : 'rejection';
    const reason = prompt(`Please provide a reason for ${actionText} of "${item.employee.name}"'s expense request:`)
    
    if (reason && reason.trim()) {
      console.log(`${isFinanceView ? 'Finance rejecting' : 'Manager rejecting'} individual request with ID: ${item.id}, Reason: ${reason}`)
      const rejectionMessage = isFinanceView 
        ? `Expense request for "${item.employee.name}" has been rejected by Finance.\nReason: "${reason}"`
        : `Expense request for "${item.employee.name}" has been rejected.\nReason: "${reason}"`;
      alert(rejectionMessage)
      // Here you would typically call an API to update the item status
    } else if (reason !== null) {
      alert('Rejection reason is required.')
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedExpense(null)
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
      case 'claimed':
        return 'claimed';
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
        <thead className="list-table-header">
          <tr>
            {(isManagerView || isFinanceView) && <th>Select</th>}
            <th>Date</th>
            <th>Employee</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item) => (<tr 
              key={item.id} 
              className={`list-table-row ${(!isManagerView && !isFinanceView) ? 'clickable-row' : ''}`}
              onClick={(!isManagerView && !isFinanceView) ? () => handleRowClick(item) : undefined}
              title={(!isManagerView && !isFinanceView) ? "Click to view details" : undefined}
            >
              {(isManagerView || isFinanceView) && (
                <td className="list-table-cell">
                  <input
                    type="checkbox"
                    checked={selectedRequests.includes(item.id)}
                    onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                    onClick={(e) => e.stopPropagation()}
                    className="manager-checkbox"
                  />
                </td>
              )}
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
                <span className="list-amount">{item.amount}</span>
              </td>
              <td className="list-table-cell">
                <span className={`list-status ${getStatusClass(item.status)}`}>
                  {item.statusText}
                </span>
              </td>
              <td className="list-table-cell">
                {(!isManagerView && !isFinanceView) && (
                  <div className="list-actions">
                    <button 
                      className={`action-button update-button ${item.status !== 'draft' ? 'disabled' : ''}`}
                      onClick={(e) => handleUpdate(e, item)}
                      title={item.status !== 'draft' ? 'Update only available for draft items' : 'Update record'}
                      disabled={item.status !== 'draft'}
                    >
                      <FiEdit2 />
                    </button>
                    <button 
                      className={`action-button delete-button ${item.status !== 'draft' ? 'disabled' : ''}`}
                      onClick={(e) => handleDelete(e, item)}
                      title={item.status !== 'draft' ? 'Delete only available for draft items' : 'Delete record'}
                      disabled={item.status !== 'draft'}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                )}
                {(isManagerView || isFinanceView) && (
                  <div className="list-actions">
                    <button 
                      className={`action-button manager-accept-button ${
                        isFinanceView 
                          ? (item.status !== 'pending' ? 'disabled' : '') 
                          : (item.status !== 'pending' ? 'disabled' : '')
                      }`}
                      onClick={(e) => handleIndividualAccept(e, item)}
                      title={
                        isFinanceView 
                          ? (item.status !== 'pending' ? 'Approval only available for pending requests' : 'Approve expense request')
                          : (item.status !== 'pending' ? 'Accept only available for pending approval' : 'Approve expense request')
                      }
                      disabled={item.status !== 'pending'}
                    >
                      <FiCheck />
                    </button>
                    <button 
                      className={`action-button manager-reject-button ${
                        isFinanceView 
                          ? (item.status !== 'pending' ? 'disabled' : '') 
                          : (item.status !== 'pending' ? 'disabled' : '')
                      }`}
                      onClick={(e) => handleIndividualReject(e, item)}
                      title={
                        isFinanceView 
                          ? (item.status !== 'pending' ? 'Rejection only available for pending requests' : 'Reject expense request')
                          : (item.status !== 'pending' ? 'Reject only available for pending approval' : 'Reject expense request')
                      }
                      disabled={item.status !== 'pending'}
                    >
                      <FiX />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Modal for expense details */}
      {showModal && selectedExpense && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Expense Details - {selectedExpense.employee.name}</h2>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <AddExpense 
              onClose={closeModal}
              initialData={{
                expenseDate: selectedExpense.date,
                amount: selectedExpense.amount.replace('$', ''),
                description: `${selectedExpense.category} expense`,
                employee: selectedExpense.employee,
                status: selectedExpense.status
              }}
              isViewMode={true}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default List