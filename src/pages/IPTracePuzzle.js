import React, { useState } from 'react';

export default function IPTracePuzzle({ onNext }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [infoVisible, setInfoVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = answer.trim().toLowerCase();
    if (trimmed.includes('강남')) {
      setFeedback('✅ 정답입니다! 위치를 성공적으로 추적했습니다.');
      setTimeout(() => onNext(), 1500);
    } else {
      setFeedback('❌ 위치 추적 실패. 다시 시도해보세요.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(/wall.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        fontFamily: 'sans-serif',
        padding: 20,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 800 }}>
        <h2>📍 Stage 3 - 위치를 알아내기 위해 IP 추적하기</h2>
        <p style={{ marginTop: 20 }}>
          벽에서 ip 주소같이 생긴 숫자들을 발견했습니다.<br />
          당신의 근거지를 찾으려면 IP 주소의 비밀을 해독해야 합니다.<br />
          IP 주소는 클래스 A, B, C로 구분되며, 클래스에 따라 네트워크 주소의 범위가 다릅니다.
        </p>

        <ul style={{ textAlign: 'left', margin: '20px auto', maxWidth: 400 }}>
          <li><strong>Class A</strong>: 첫 번째 옥텟만 네트워크 (ex. 10.x.x.x)</li>
          <li><strong>Class B</strong>: 두 번째 옥텟까지 네트워크 (ex. 172.16.x.x)</li>
          <li><strong>Class C</strong>: 세 번째 옥텟까지 네트워크 (ex. 192.168.30.x)</li>
        </ul>

        <p><strong>IP 주소: 192.168.30.77</strong></p>

        <p>아래 지역 정보를 참고하여 이 IP 주소가 가리키는 <strong>최종 위치(구 단위)</strong>를 입력하세요.</p>

        <button
          onClick={() => setInfoVisible(true)}
          style={{
            marginBottom: 20,
            padding: '8px 16px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: 5,
            border: '1px solid #ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
          }}
        >
          정보 보기
        </button>

        {infoVisible && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            color: 'white',
          }}>
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              padding: 20,
              borderRadius: 8,
              maxWidth: '90%',
              maxHeight: '80%',
              overflowY: 'auto',
              boxShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}>
              <h3>지역 정보 표</h3>
              <p>첫 옥텟은 광역 권역을 나타냅니다.</p>
              <ul>
                <li>192 → 서울/경기/강원권</li>
                <li>172 → 충청/전라권</li>
                <li>10 → 부산/경남권</li>
              </ul>
              <p>두 번째 옥텟은 도/광역시를 나타냅니다.</p>
              <ul>
                <li>168 → 서울</li>
                <li>169 → 경기</li>
                <li>170 → 강원</li>
              </ul>
              <p>세 번째 옥텟은 세부 구를 나타냅니다.</p>
              <ul>
                <li>10 → 마포구</li>
                <li>20 → 영등포구</li>
                <li>30 → 강남구</li>
                <li>40 → 종로구</li>
              </ul>
              <button
                onClick={() => setInfoVisible(false)}
                style={{
                  marginTop: 20,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: 5,
                  border: 'none',
                  backgroundColor: '#4a90e2',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                닫기
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="구 단위 위치를 입력하세요 (예: 서대문구)"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{
              padding: 10,
              fontSize: '1rem',
              width: '60%',
              borderRadius: 5,
              border: '1px solid #ccc',
            }}
          />
          <button
            type="submit"
            style={{
              marginLeft: 10,
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
            }}
          >
            제출
          </button>
        </form>

        <p style={{ marginTop: 20, color: feedback.startsWith('✅') ? '#8f8' : '#f88' }}>
          {feedback}
        </p>
      </div>
    </div>
  );
}

