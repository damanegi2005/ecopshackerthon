import React from "react";

export default function Stage8() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/success.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // ✅ 오타 수정!
        color: "white",
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial",
        lineHeight: "1.8"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>🎉 축하합니다! 🎉</h1>

      <p style={{ fontSize: "1.3rem", maxWidth: "800px" }}>
        <strong>우와! 이걸 통과하시다니, 당신은 보안 인재임에 틀림 없습니다.</strong>
        <br /><br />
        여러 단계 동안 보안 지식을 배우시느라 고생 많으셨습니다.
        <br />
        <strong>사이버보안학과로 전과할 자격을 드립니다. 🛡️</strong>
        <br /><br />
        앞으로도 사이버 보안에 대한 관심을 이어가며
        <br />
        멋진 보안 전문가로 성장하길 응원합니다! 🔐
      </p>
    </div>
  );
}
