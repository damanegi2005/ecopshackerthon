import React, { useState } from "react";

export default function Stage6({ onNext }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false); // ✅ 정답 여부 저장

  const handleSubmit = () => {
    // 이미 정답 맞춘 상태에서 다시 제출 → 다음 단계로 이동
    if (isCorrect) {
      onNext();
      return;
    }

    // 아직 정답 맞추지 않은 상태
    if (answer.trim() === "4") {
      setFeedback("✅ 정답입니다! 다시 제출하면 다음 단계로 이동합니다.");
      setIsCorrect(true); // ✅ 정답 상태로 변경
    } else {
      setFeedback("❌ 틀렸어요. 다시 시도해보세요.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "30px",
        fontFamily: "Arial",
        lineHeight: "1.6"
      }}
    >
      <h1>Stage 6</h1>
      <p>
        압축 파일을 풀었더니 <code>passwords.txt</code> 파일이 떴어요.<br />
        이 파일을 실행하기 위해서 리눅스에서 터미널에<br />
        <code>bash /media/usb/passwords.txt</code> 라는 명령어를 입력해야 해요.<br /><br />
        명령어를 입력했더니 <strong>악성코드에 감염되었어요</strong>.<br />
        우리가 실행했던 <code>passwords.txt</code> 파일이 확장자가 <code>.txt</code>여서<br />
        텍스트 파일처럼 보였지만 알고 보니 <strong>리눅스 쉘 명령어를 담은 악성코드</strong>였어요.<br /><br />
        아래의 코드를 보고 <strong>악성인 부분이 몇 번째 줄인지</strong> 입력해주세요.
      </p>

      {/* 악성 코드 이미지 표시 */}
      <img
        src="/akseong.png"
        alt="악성코드 예시 코드 이미지"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "20px 0",
          border: "1px solid #ccc"
        }}
      />

      <h3>답:</h3>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="정답 입력 (숫자만)"
        style={{
          width: "200px",
          padding: "8px",
          fontSize: "16px",
          marginBottom: "10px",
          textAlign: "center"
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          border: "1px solid #fff",
          borderRadius: "5px"
        }}
      >
        {isCorrect ? "다음 단계로 이동" : "제출"}
      </button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{feedback}</p>
    </div>
  );
}


