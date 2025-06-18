import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import '../styles/SummaryPopup.css';

const SummaryPopup = ({ departmentSummary, employeeSummary, onClose }) => {
  const [activeTab, setActiveTab] = useState('department');

  if (!departmentSummary || !employeeSummary) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Approved Expense Summary</h2>
          <button onClick={onClose} className="close-button" aria-label="Close summary popup">
            <FiX />
          </button>
        </div>
        <div className="popup-body">
          <div className="tab-container">
            <button 
              className={`tab-button ${activeTab === 'department' ? 'active' : ''}`}
              onClick={() => setActiveTab('department')}
            >
              By Department
            </button>
            <button 
              className={`tab-button ${activeTab === 'employee' ? 'active' : ''}`}
              onClick={() => setActiveTab('employee')}
            >
              By Employee
            </button>
          </div>

          {activeTab === 'department' && (
            <table className="summary-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Total Approved Amount</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(departmentSummary).map(([department, total]) => (
                  <tr key={department}>
                    <td>{department}</td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'employee' && (
            <table className="summary-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Total Approved Amount</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(employeeSummary).map(([employee, total]) => (
                  <tr key={employee}>
                    <td>{employee}</td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryPopup;
