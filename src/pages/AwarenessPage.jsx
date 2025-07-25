// src/pages/AwarenessPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AwarenessPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>경각심을 가지세요!</h2>
      <p>
        이렇게 학생증만 있어도 여러분의 정체를 쉽게 알아낼 수 있습니다.<br />
        학생증, 주민등록증 등 중요한 신분증을 항상 잘 챙기고 조심하세요!
      </p>
      <button onClick={() => navigate('/')}>처음으로 돌아가기</button>
    </div>
  );
}