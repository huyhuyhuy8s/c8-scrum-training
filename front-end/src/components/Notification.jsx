import React from "react";

/**
 * @param {Object} props
 * @param {Array} props.notifications - Danh sách notification
 * @param {boolean} props.open - Có hiển thị popup không
 * @param {function} props.onClose - Đóng popup
 * @param {function} props.onSelect - Khi chọn 1 notification
 */
function Notification({ notifications, open, onClose, onSelect }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute',
      top: 40,
      right: 0,
      width: 340,
      maxHeight: 320,
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
      overflowY: 'auto',
      padding: 0,
      zIndex: 3000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #eee', fontWeight: 600, fontSize: 17 }}>
        Thông báo
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#888', fontSize: 20, cursor: 'pointer', fontWeight: 700 }} aria-label="Đóng">×</button>
      </div>
      {notifications.length === 0 ? (
        <div style={{ padding: 24, color: '#888', textAlign: 'center' }}>Không có thông báo nào.</div>
      ) : notifications.map(noti => (
        <div key={noti.id} style={{ padding: '14px 20px', borderBottom: '1px solid #f3f3f3', fontSize: 15, color: noti.type === 'rejected' ? '#dc2626' : '#2f27ce', cursor: 'pointer' }} onClick={() => onSelect && onSelect(noti)}>
          {noti.message}
        </div>
      ))}
    </div>
  );
}

export default Notification; 