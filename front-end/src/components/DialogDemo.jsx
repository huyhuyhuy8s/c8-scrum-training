import React, { useState } from "react";
import DetailExpense from "./DetailExpense";
import Notification from "./Notification";
import NotificationDetailExpense from "./NotificationDetailExpense";
import NotificationBell from "./NotificationBell";

const mockExpenses = [
  {
    id: 1,
    date: "2025-06-14",
    employee: { name: "Sarah Johnson", department: "Marketing" },
    amount: "$75.50",
    description: "Team lunch with partners",
    image: null,
  },
  {
    id: 2,
    date: "2025-06-15",
    employee: { name: "John Smith", department: "IT" },
    amount: "$120.00",
    description: "Taxi from office to client meeting",
    image: null,
  },
];

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [showNoti, setShowNoti] = useState(false);
  const [notiDetail, setNotiDetail] = useState(null);
  const [openNotiDetail, setOpenNotiDetail] = useState(false);
  const [hasNew, setHasNew] = useState(false);

  // Hiển thị dialog chi tiết expense
  const handleOpenDetail = (expense) => {
    setSelectedExpense(expense);
    setOpen(true);
  };

  // Khi approve
  const handleApprove = () => {
    setNotifications(prev => [
      {
        id: Date.now(),
        message: `Expense ${selectedExpense.amount} vào ngày ${selectedExpense.date} của bạn được đồng ý`,
        type: "approved",
        ...selectedExpense
      },
      ...prev
    ]);
    setHasNew(true);
    setOpen(false);
    setSelectedExpense(null);
  };

  // Khi reject
  const handleReject = (reason) => {
    setNotifications(prev => [
      {
        id: Date.now(),
        message: `Expense ${selectedExpense.amount} vào ngày ${selectedExpense.date} của bạn bị từ chối. Lý do: ${reason}`,
        type: "rejected",
        reason,
        ...selectedExpense
      },
      ...prev
    ]);
    setHasNew(true);
    setOpen(false);
    setSelectedExpense(null);
  };

  // Khi chọn 1 notification
  const handleSelectNoti = (noti) => {
    setNotiDetail(noti);
    setOpenNotiDetail(true);
    setShowNoti(false);
  };

  // Khi nhấn chuông
  const handleBellClick = () => {
    setShowNoti(v => !v);
    setHasNew(false);
  };

  return (
    <div style={{ padding: 40, minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Bell icon và notification popup */}
      <div style={{ position: 'fixed', top: 24, right: 40, zIndex: 2000 }}>
        <NotificationBell hasNew={hasNew} onClick={handleBellClick} />
        <Notification notifications={notifications} open={showNoti} onClose={() => setShowNoti(false)} onSelect={handleSelectNoti} />
      </div>

      {/* List expense mẫu */}
      <div style={{ maxWidth: 700, margin: '60px auto 0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Danh sách Expense</h2>
        <table className="list-table">
          <thead className="list-table-header">
            <tr>
              <th className="list-table-header">Date</th>
              <th className="list-table-header">Employee</th>
              <th className="list-table-header">Amount</th>
            </tr>
          </thead>
          <tbody>
            {mockExpenses.map(exp => (
              <tr key={exp.id} className="list-table-row" style={{ cursor: 'pointer' }} onClick={() => handleOpenDetail(exp)}>
                <td className="list-table-cell">{exp.date}</td>
                <td className="list-table-cell">{exp.employee.name}</td>
                <td className="list-table-cell">{exp.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog chi tiết expense */}
      <DetailExpense
        open={open}
        onClose={() => { setOpen(false); setSelectedExpense(null); }}
        onApprove={handleApprove}
        onReject={handleReject}
        data={selectedExpense}
      />
      {/* Dialog chi tiết notification */}
      <NotificationDetailExpense
        open={openNotiDetail}
        onClose={() => setOpenNotiDetail(false)}
        data={notiDetail}
      />
    </div>
  );
} 