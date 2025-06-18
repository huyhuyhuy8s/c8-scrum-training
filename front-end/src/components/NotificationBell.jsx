import React from "react";
import { FiBell } from "react-icons/fi";

/**
 * @param {Object} props
 * @param {boolean} props.hasNew - Có notification mới chưa xem không
 * @param {function} props.onClick - Xử lý khi bấm chuông
 */
function NotificationBell({ hasNew, onClick }) {
  return (
    <button
      style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: 0 }}
      onClick={onClick}
      aria-label="Notifications"
    >
      <FiBell size={32} color="#2f27ce" />
      {hasNew && (
        <span style={{
          position: 'absolute',
          top: 4,
          right: 4,
          width: 10,
          height: 10,
          background: '#dc2626',
          borderRadius: '50%',
          display: 'block',
          boxShadow: '0 0 0 2px #fff',
        }} />
      )}
    </button>
  );
}

export default NotificationBell; 