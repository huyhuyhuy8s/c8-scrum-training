import React, { useState } from "react";
import "../styles/List.css";

/**
 * @param {Object} props
 * @param {boolean} props.open - Hiển thị dialog hay không
 * @param {function} props.onClose - Đóng dialog
 * @param {function} props.onApprove - Xử lý duyệt
 * @param {function} props.onReject - Xử lý từ chối (nhận lý do reject)
 * @param {Object} props.data - Dữ liệu expense
 */
function DetailExpense({ open, onClose, onApprove, onReject, data }) {
  const [showRejectReason, setShowRejectReason] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  if (!open || !data) return null;

  const handleRejectClick = () => {
    setShowRejectReason(true);
    setRejectReason("");
  };

  const handleCancelReject = () => {
    setShowRejectReason(false);
    setRejectReason("");
  };

  const handleConfirmReject = () => {
    if (!rejectReason.trim()) {
      alert("Vui lòng nhập lý do từ chối!");
      return;
    }
    onReject(rejectReason);
    setShowRejectReason(false);
    setRejectReason("");
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div className="list-container" style={{ borderRadius: 16, padding: 36, minWidth: 420, maxWidth: 540, boxShadow: '0 4px 32px rgba(0,0,0,0.18)', lineHeight: 2, background: '#fff' }}>
        <h2 className="list-title" style={{ marginBottom: 24, fontSize: 28, fontWeight: 700 }}>Expense Details</h2>
        <div style={{ marginBottom: 28, fontSize: 16 }}>
          <div style={{ marginBottom: 10 }}><b>Date:</b> <span style={{ color: '#2f27ce', fontWeight: 500 }}>{data.date}</span></div>
          <div style={{ marginBottom: 10 }}><b>Employee:</b> {data.employee?.name} <span style={{ color: '#888', fontSize: 13 }}>({data.employee?.department})</span></div>
          <div style={{ marginBottom: 10 }}><b>Amount:</b> {data.amount}</div>
          <div style={{ marginBottom: 10 }}><b>Description:</b> {data.description}</div>
          <div style={{ marginBottom: 10 }}><b>Image:</b> <span style={{ color: '#888' }}>[No image]</span></div>
          {/* Nếu có image thì hiển thị ảnh thật */}
          {data.image && (
            <div style={{ marginTop: 8 }}>
              <img src={data.image} alt="Expense" style={{ maxWidth: 320, borderRadius: 8 }} />
            </div>
          )}
        </div>
        {/* Nếu đang reject thì hiện textarea nhập lý do và 2 nút xác nhận/hủy */}
        {showRejectReason ? (
          <>
            <textarea
              value={rejectReason}
              onChange={e => setRejectReason(e.target.value)}
              placeholder="Nhập lý do từ chối..."
              rows={4}
              style={{ width: '100%', borderRadius: 6, border: '1.5px solid #d1d5db', padding: 10, marginBottom: 16 }}
              required
              autoFocus
            />
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 8 }}>
              <button className="list-action-btn" style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 32px', cursor: 'pointer', fontWeight: 500, fontSize: 16 }} onClick={handleConfirmReject}>
                Xác nhận từ chối
              </button>
              <button className="list-action-btn" style={{ background: '#dedcff', color: '#2f27ce', border: 'none', borderRadius: 6, padding: '10px 32px', cursor: 'pointer', fontWeight: 500, fontSize: 16 }} onClick={handleCancelReject}>
                Hủy
              </button>
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 16 }}>
            <button className="list-action-btn" style={{ background: '#2f27ce', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 32px', cursor: 'pointer', fontWeight: 500, fontSize: 16 }} onClick={onApprove}>Approve</button>
            <button className="list-action-btn" style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 32px', cursor: 'pointer', fontWeight: 500, fontSize: 16 }} onClick={handleRejectClick}>Reject</button>
            <button className="list-action-btn" style={{ background: '#dedcff', color: '#2f27ce', border: 'none', borderRadius: 6, padding: '10px 32px', cursor: 'pointer', fontWeight: 500, fontSize: 16 }} onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailExpense; 