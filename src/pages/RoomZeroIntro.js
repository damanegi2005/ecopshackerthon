import React from 'react';

export default function RoomZeroIntro({ onNext }) {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // 세로 중앙 정렬
        alignItems: 'center',     // 가로 중앙 정렬
        textAlign: 'center',
        fontFamily: 'sans-serif',
        color: 'white',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
        🔐 Room Zero: 보안의 방에서 탈출하라!
      </h1>
      <p style={{ marginTop: 20, fontSize: '1.1rem', maxWidth: 600, textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
        당신은 어느 날 눈을 떠보니 정체불명의 연구소, <strong>Room Zero</strong>에 갇혀 있었습니다.<br />
        기억은 사라지고, 당신의 정체는 알 수 없습니다.
        이 미션은 보안적 사고를 훈련하기 위한 시뮬레이션입니다.
        공격과 방어의 모든 단계에서 취약점과 위협에 유의하며 문제를 해결하세요.
        <strong>방심은 허용되지 않습니다.</strong><br /><br />
        단서들을 따라 정보를 모으고, 보안 문제들을 풀어 방을 탈출하세요.<br />
        <strong>이 게임은 이화여대 정보보안 동아리 <span style={{ color: '#7b4f9a' }}>E-COPS</span>의 해시감자 팀이 제작했습니다.</strong>
      </p>

      <button
        onClick={onNext}
        style={{
          marginTop: 40,
          fontSize: '1.2rem',
          padding: '12px 30px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        }}
      >
        시작하기
      </button>
    </div>
  );
}