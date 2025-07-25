import React, { useState } from "react";

export default function Stage5({ onNext }) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const correctHash = "5bc0a65404e945fb503492e85fd187a518dd8302a7e0580648fbc2e8282b27b8";

  const handleSubmit = () => {
    if (input.trim() === correctHash) {
      if (message.includes("정답입니다")) {
        // ✅ 이미 정답 맞춘 상태에서 한 번 더 제출 → 다음 스테이지로 이동
        onNext();
      } else {
        setMessage("✅ 정답입니다! 다시 제출하면 다음 단계로 이동합니다.");
      }
    } else {
      setMessage("❌ 틀렸어요. 다시 확인해보세요.");
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
      <h1>이제 거의 다 왔어요! 마지막 Stage에요 :)</h1>
      <p>
        이제 마지막 비밀번호를 얻기 위해서는 이 압축 파일을 풀어야 해요.<br />
        하지만 압축 파일은 비밀번호를 입력해야 풀려요.<br />
        여기에 그 비밀번호에 대한 힌트가 있어요.
      </p>

      <h2>🔐 힌트</h2>
      <ul style={{ textAlign: "left", maxWidth: "600px" }}>
        <li><strong>SALT:</strong> <code>IHateFish</code></li>
        <li><strong>패스워드:</strong> 학번에 SALT를 붙인 것을 SHA256한 것</li>
        <li>
          SHA256 해시 계산기:{" "}
          <a
            href="https://emn178.github.io/online-tools/sha256.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "yellow" }}
          >
            https://emn178.github.io/online-tools/sha256.html
          </a>
        </li>
        <li>* SHA256을 한다는 것은 위 해시 계산기에서 값을 넣어 해시 값을 계산한 것을 의미해요.</li>
      </ul>

      <h3 style={{ marginTop: "30px" }}>패스워드 입력하기</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="SHA256 해시값 입력"
        style={{
          width: "400px",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px"
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {message.includes("정답") ? "다음 단계로 이동" : "제출"}
      </button>

      <button
        onClick={() => setShowInfo(!showInfo)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        ℹ️ 정보 보기
      </button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>

      {/* 정보 보기 영역 */}
      {showInfo && (
        <div
          style={{
            marginTop: "40px",
            background: "rgba(0,0,0,0.6)",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "800px",
            textAlign: "left"
          }}
        >
          <h2>🔍 해시 함수와 SALT에 대해 알아보기</h2>
          <h3>1. 해시 함수란 무엇일까요?</h3>
          <p>
            해시 함수는 "입력값"을 받아서, 절대 바뀌지 않는 "고정된 길이의 암호처럼 보이는 값"으로 바꿔주는 수학적인 계산법이에요.<br />
            즉, 어떤 정보를 넣든, 완전히 다른 형태의 문자열로 바뀌는 장치예요.
          </p>

          <p>→ 입력이 조금만 바뀌어도 완전히 다른 해시값이 나와요!</p>
          <ul>
            <li>해시 함수는 비밀번호를 직접 저장하지 않고 보호하기 위해 사용돼요.</li>
            <li>서버는 비밀번호를 저장하는 대신, 해시값만 저장해요.</li>
            <li>로그인할 때는 입력한 비밀번호를 다시 해시해서 비교해요.</li>
          </ul>

          <h3 style={{ marginTop: "30px" }}>2. SALT는 무엇일까요?</h3>
          <p>
            SALT는 해시를 계산하는 과정에서 비밀번호에 추가로 붙이는 랜덤한 문자열이에요.<br />
            같은 비밀번호이더라도 해시값을 다르게 만들기 위해 사용돼요.<br />
            예: 비밀번호가 1234이고 SALT가 <code>ILoveYou</code> → 실제 해싱 대상은 <code>1234ILoveYou</code>
          </p>

          <p>→ 같은 비밀번호여도 SALT를 다르게 하면 해시값이 완전히 달라집니다.</p>
        </div>
      )}
    </div>
  );
}

