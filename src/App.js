import React, { useState } from 'react';
import RoomZeroIntro from './pages/RoomZeroIntro';
import StudentIdPage from './pages/StudentIdPage';
import SecurityGoalsPuzzle from './pages/SecurityGoalsPuzzle';
import IPTracePuzzle from './pages/IPTracePuzzle';
import USBStage from './pages/USBStage'; 
import Stage5 from './pages/Stage5'; // 새 스테이지 임포트
import Stage6 from "./pages/Stage6";
import Stage7 from "./pages/Stage7";
import Stage8 from "./pages/Stage8";

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
      {step === 5 && <USBStage onNext={handleNext} />}  
      {step === 6 && <Stage5 onNext={handleNext} />} 
      {step === 7 && <Stage6 onNext={handleNext} />}
      {step === 8 && <Stage7 onNext={handleNext} />}
      {step === 9 && <Stage8 />}{/* 새 스테이지 추가 */}
    </div>
  );
}

export default App;