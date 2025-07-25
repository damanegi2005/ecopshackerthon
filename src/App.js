import React, { useState } from 'react';
import RoomZeroIntro from './pages/RoomZeroIntro';
import StudentIdPage from './pages/StudentIdPage';
import SecurityGoalsPuzzle from './pages/SecurityGoalsPuzzle';
import IPTracePuzzle from './pages/IPTracePuzzle';
import USBStage from './pages/USBStage';  // 새 스테이지 임포트

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div>
      {step === 1 && <RoomZeroIntro onNext={handleNext} />}
      {step === 2 && <StudentIdPage onNext={handleNext} />}
      {step === 3 && <SecurityGoalsPuzzle onNext={handleNext} />}
      {step === 4 && <IPTracePuzzle onNext={handleNext} />}
      {step === 5 && <USBStage onNext={handleNext} />}  {/* USB 스테이지 추가 */}
      {step > 5 && <div><h2>다음 단계 준비 중입니다...</h2></div>}
    </div>
  );
}

export default App;