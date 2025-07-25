// src/pages/IntroPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Room Zero: 보안의 방에서 탈출하라</h1>
      <p>눈을 떠보니 알 수 없는 방에 갇혔다. 단서는 보안 지식뿐이다.</p>
      <button onClick={() => navigate('/room')}>게임 시작하기</button>
    </div>
  );
}