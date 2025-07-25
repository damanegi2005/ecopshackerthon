import React, { useState } from 'react';
import StudentCard from '../components/StudentCard';
import { studentInfo } from '../data/student';

export default function StudentIdPage({ onNext }) {
  const [showBack, setShowBack] = useState(false);
  const [picked, setPicked] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  function handlePick() {
    alert('학생증 뒷면엔 너의 정체가 담겨 있으니, 꼭 기억을 해야 한다. 방을 탈출하려면 사용해야 하는 정보이다.');
    setPicked(true);
  }

  return (
    <div
      style={{
        padding: 20,
        height: '100vh',
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: 'white',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>stage1 - 학생증을 찾아 자신의 정체를 알아내자!</h2>

      {!picked && (
        <button
          onClick={handlePick}
          style={{
            position: 'absolute',
            top: '83%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          학생증 집기
        </button>
      )}

      {picked && !showBack && (
        <button
          onClick={() => setShowBack(true)}
          style={{
            position: 'absolute',
            top: '83%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          학생증 뒷면 보기
        </button>
      )}

      {showBack && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            backgroundColor: '#1E4D2B',
            padding: 30,
            borderRadius: 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            color: 'white',
            display: 'inline-block',
          }}
        >
          <StudentCard student={studentInfo} />

          <p style={{ marginTop: 20, color: 'red' }}>
            학생증만으로도 여러분의 신원을 손쉽게 파악할 수 있습니다.<br />
            학생증과 주민등록증에는 많은 정보가 담겨 있으니, 항상 잘 챙기고 분실에 유의하세요!
          </p>

          {!showNextButton && (
            <button
              onClick={() => {
                setShowNextButton(true);
              }}
              style={{ marginTop: 20 }}
            >
              학생증 내려놓기
            </button>
          )}

          {showNextButton && (
            <button
              onClick={onNext}
              style={{
                marginTop: 20,
                padding: '10px 20px',
                fontSize: '1.1rem',
                borderRadius: 8,
                backgroundColor: '#ffffff',
                color: '#000',
              }}
            >
              책상 위로 이동
            </button>
          )}
        </div>
      )}
    </div>
  );
}