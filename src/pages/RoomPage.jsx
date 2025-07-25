// src/pages/RoomPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoomPage() {
  const [hasStudentId, setHasStudentId] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>낯선 방 안에 갇혔다.</h2>
      {!hasStudentId ? (
        <>
          <p>방 어딘가에 학생증이 놓여있다.</p>
          <button onClick={() => setHasStudentId(true)}>학생증 집기</button>
          <p><i>주의: 학생증 뒷면엔 너의 정체가 담겨 있으니 꼭 기억해야 한다!</i></p>
        </>
      ) : (
        <>
          <p>학생증을 가지고 있다.</p>
          <button onClick={() => navigate('/student-id')}>학생증 뒷면 보기</button>
          <button onClick={() => setHasStudentId(false)}>학생증 내려놓기</button>
        </>
      )}
    </div>
  );
}