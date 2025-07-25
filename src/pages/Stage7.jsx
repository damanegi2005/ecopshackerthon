import React, { useState } from "react";

export default function Stage7({ onNext }) {
  const [finalAnswer, setFinalAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const correctAnswer = "I LOVE EWHA E-COPS";

  const handleSubmit = () => {
    if (finalAnswer.trim().toUpperCase() === correctAnswer) {
      setFeedback("✅ 정답입니다! 탈출 성공!");
      // 1.5초 후 다음 스테이지 이동
      setTimeout(() => onNext(), 1500);
    } else {
      setFeedback("❌ 틀렸어요. 다시 확인해보세요.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",                  // 화면 전체 높이
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",             // 화면 꽉 채우기
        backgroundPosition: "center",        // 중앙 정렬
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",            // 세로 중앙
        alignItems: "center",                // 가로 중앙
        color: "#fff",                       // 글자 흰색
        textAlign: "center",                 // 텍스트 중앙 정렬
        padding: "30px",
        fontFamily: "Arial",
        lineHeight: "1.6"
      }}
    >
      <h1>Stage 7</h1>
      <p style={{ maxWidth: "800px" }}>
        악성인 코드를 찾아서 삭제까지 하셨군요!<br />
        <strong>악성코드 감염에서 풀려나셨어요 :)</strong><br /><br />
        여기까지 오셨으니 <strong>최종 도어락 비밀번호</strong>를 알려드릴게요.<br />
        비밀번호는 <code>'I LOVE EWHA E-COPS'</code> 에요.
      </p>

      <h3 style={{ marginTop: "30px" }}>최종 비밀번호 입력하기</h3>
      <input
        type="text"
        value={finalAnswer}
        onChange={(e) => setFinalAnswer(e.target.value)}
        placeholder="비밀번호 입력"
        style={{
          width: "400px",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          textAlign: "center"
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          border: "1px solid #fff",
          borderRadius: "5px"
        }}
      >
        제출
      </button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{feedback}</p>
    </div>
  );
}
