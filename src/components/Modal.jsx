import React from 'react';

export default function Modal({ visible, onClose, children }) {
  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 9999,
    }}>
      <div style={{
        backgroundColor: 'white', padding: 20, borderRadius: 8,
        maxWidth: '80%', maxHeight: '80%', overflowY: 'auto',
      }}>
        {children}
        <button onClick={onClose} style={{ marginTop: 20 }}>닫기</button>
      </div>
    </div>
  );
}