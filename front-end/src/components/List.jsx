import React, { useState } from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import AddExpense from './AddExpense'
import '../styles/List.css'

const List = ({ title = "Recent Activities", data = [] }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)
  
  // Sample data if no data is provided
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
      statusText: "Pending Manager"
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
      statusText: "Approved"
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
      statusText: "Approved"
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
      statusText: "Pending Manager"
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
      statusText: "Approved"    },
    {
      id: 7,
      date: "2025-06-09",
      employee: {
        name: "Robert Taylor",
        department: "Operations"
      },
      category: "Training",
      amount: "$250.00",
      status: "draft",
      statusText: "Draft"
    },
    {
      id: 8,
      date: "2025-06-08",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing"
      },
      category: "Equipment",
      amount: "$450.75",
      status: "pending",
      statusText: "Pending Manager"    },
    {
      id: 9,
      date: "2025-06-08",
      employee: {
        name: "Jennifer Lee",
        department: "Marketing"
      },
      category: "Advertising",
      amount: "$2,500.00",
      status: "approved",
      statusText: "Approved"
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
      
      <table className="list-table">        <thead className="list-table-header">
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item) => (
            <tr 
              key={item.id} 
              className="list-table-row clickable-row"
              onClick={() => handleRowClick(item)}
              title="Click to view details"
            >
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
              </td>              <td className="list-table-cell">
                <span className={`list-status ${getStatusClass(item.status)}`}>
                  {item.statusText}
                </span>
              </td>
              <td className="list-table-cell">                <div className="list-actions">
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
              </td>
            </tr>
          ))}        </tbody>
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