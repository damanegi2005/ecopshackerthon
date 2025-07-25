import React, { useState } from 'react';

const goals = [
  { word: 'Authentication', holes: [8] },
  { word: 'Availability', holes: [4, 5] },
  { word: 'Access Control', holes: [4, 5] },
  { word: 'Integrity', holes: [] },
  { word: 'Confidentiality', holes: [0] },
  { word: 'Non-Repudiation', holes: [] },
];

const answer = "ClassC";

export default function SecurityGoalsPuzzle({ onNext }) {
  const [input, setInput] = useState('');
  const [correct, setCorrect] = useState(false);

  const holeChars = goals.flatMap(goal =>
    goal.holes.map(i => goal.word[i])
  );

  function handleChange(e) {
    const val = e.target.value;
    if (/^[a-zA-Z]*$/.test(val) && val.length <= holeChars.length) {
      setInput(val);
    }
  }

  function checkAnswer() {
    if (input.toLowerCase() === answer.toLowerCase()) {
      alert('정답입니다! 다음 단계로 넘어갈 준비가 되었습니다.');
      setCorrect(true);
    } else {
      alert('틀렸습니다. 다시 시도하세요.');
      setCorrect(false);
    }
  }

  const noteText = `Authenti_ation
Avai_ _bility
Acce_ _Control
Integrity
_onfidentiality
Non-Repudiation`;

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
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: 20,
        textAlign: 'center',
      }}
    >
      <h2>step2 - 정보보안의 6가지 기본 목표</h2>
      <p>책상에 있는 노트를 확인했다.</p>

      <div style={{ position: 'relative', width: 400, margin: '20px 0' }}>
        <img
          src="/note.png"
          alt="note"
          style={{ width: '100%', display: 'block' }}
        />
        <pre
          style={{
            position: 'absolute',
            top: 40,
            left: 20,
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'pre-wrap',
            margin: 0,
            lineHeight: 1.3,
            fontFamily: 'monospace',
            textAlign: 'left',
          }}
        >
          {noteText}
        </pre>
      </div>

      <div style={{ marginTop: 30 }}>
        <label>
          빈칸 글자를 차례대로 입력하세요: &nbsp;
          <input
            type="text"
            value={input}
            onChange={handleChange}
            maxLength={holeChars.length}
            style={{ fontSize: '1.2rem', width: 200 }}
            placeholder={`${holeChars.length}글자 입력`}
          />
        </label>
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={checkAnswer}
          style={{ padding: '10px 20px', fontSize: '1.2rem', marginRight: 10 }}
        >
          확인
        </button>

        {correct && (
          <button
            onClick={onNext}
            style={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            다음으로 이동
          </button>
        )}
      </div>
    </div>
  );
}
