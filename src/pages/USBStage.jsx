import React, { useState } from "react";

export default function USBStage({ onNext }) {
  const [popupAllowed, setPopupAllowed] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [qrSelectedCorrectly, setQrSelectedCorrectly] = useState(false);

  const handleFileClick = () => {
    const result = window.confirm("USB 파일을 열기 위해 팝업을 허용하시겠습니까?");
    setPopupAllowed(result);
  };

  const handleQRClick = (index) => {
    if (index === 2) { // 게임 로직에 따라 인덱스 조정 필요
      alert("정답입니다! 다음 스테이지로 이동합니다.");
      setQrSelectedCorrectly(true);
    } else {
      alert("악성 QR입니다. 다시 시도하세요.");
      setQrSelectedCorrectly(false);
    }
  };

  const handleNextStage = () => {
    onNext();
  };

  return (
    <div className="full-screen-container" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="stage-content-box">
        <h2 className="stage-title">stage 4 - USB 파일을 열어보자</h2>

        {popupAllowed === null && (
          <button onClick={handleFileClick} className="usb-file-button">
            USB 안의 파일 열기
          </button>
        )}

        {popupAllowed === true && (
          <div className="status-message">
            <h3 className="malware-alert">악성코드에 감염되었습니다! 실패입니다.</h3>
            <button onClick={() => setPopupAllowed(null)} className="back-button">
              이전으로
            </button>
          </div>
        )}

        {popupAllowed === false && !qrSelectedCorrectly && (
          <div className="status-message">
            <p className="success-message">
              팝업이 차단되어 파일이 열리지 않았습니다. USB 안에 있던 QR 중 안전한 것을 고르세요.
              QR코드를 스캔하면 표시되는 URL은 실제 운영되는 서비스가 아닙니다.
              따라서 URL 주소만 보고 안전 여부를 판단하세요! 
            </p>
            <div className="qr-grid">
              {[1, 2, 4, 5].map((num, i) => (
                <div key={i} className="qr-item">
                  <img
                    src={`/qr${num}.png`}
                    alt={`QR code ${num}`}
                    className="qr-image"
                    onClick={() => handleQRClick(i)}
                  />
                  <button onClick={() => handleQRClick(i)} className="select-qr-button">
                    선택
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {qrSelectedCorrectly && (
          <div className="next-stage-container">
            <p className="success-message mb-4">정답을 찾았습니다! 다음 스테이지로 이동하세요.</p>
            <button
              onClick={handleNextStage}
              className="next-stage-button"
            >
              다음으로 이동
            </button>
          </div>
        )}

        {popupAllowed !== true && !qrSelectedCorrectly && (
          <button onClick={() => setShowModal(true)} className="info-button">
            💡 정보 보기
          </button>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">사이버 보안 정보</h3> {/* 제목 변경 */}
            <ul className="modal-list">
              {/* QR코드 정보 */}
              <li>
                <strong>QR코드란?</strong> Quick Response Code의 약자로, 스캔 시 텍스트, URL 등의 정보를 읽어낼 수 있는 2차원 바코드입니다. QR코드는 문자열 데이터를 압축한 것으로, QR앱이나 카메라로 패턴을 해석하면 문자열을 복원할 수 있습니다. 만약 QR코드 안에 악성 URL을 삽입한다면, 이를 스캔 시 피싱 사이트로 연결되어 중요 정보 탈취 등의 공격이 발생할 수 있습니다. 안전해 보이는 QR이라도 실제로는 다크웹 주소일 수 있습니다. 그러므로 QR을 스캔하면 바로 열지 말고 URL을 먼저 확인해야 합니다.
              </li>
              <br /> {/* 줄바꿈을 위해 추가 */}

              {/* URL 주소 정보 */}
              <li>
                <strong>URL 주소 주의사항:</strong> 100% 판별은 어렵지만, 육안으로 파악할 수 있는 피싱/악성 URL들이 있습니다.
              </li>
              <br />

              {/* HTTP vs HTTPS 정보 */}
              <li>
                <strong>HTTP vs HTTPS:</strong>
                <ul>
                  <li><strong>HTTP:</strong> 웹사이트와 브라우저가 데이터를 주고받는 기본 프로토콜입니다. 로그인 및 결제 정보가 평문으로 노출되어 해커가 쉽게 훔칠 수 있습니다.</li>
                  <li><strong>HTTPS:</strong> HTTP에 SSL/TLS 암호화가 추가되어 데이터가 암호문으로 전송되는 프로토콜입니다. 현재 로그인 및 결제 페이지는 모두 `https://`로 이루어져 있습니다.</li>
                </ul>
              </li>
              <br />

              {/* 해외 IP/도메인 주의 정보 */}
              <li>
                <strong>해외 IP/도메인 주의:</strong> 정상적인 한국 서비스는 보통 `.kr` 또는 `.com`으로 이루어집니다. 그러나 피싱은 해외 국가 도메인이 자주 사용되는데, 이는 국내 차단 시 새로 해외 도메인으로 쉽게 만들 수 있기 때문입니다. 자주 쓰이는 해외 피싱 도메인 예시: `.ru` (러시아), `.cn` (중국), `.tk` (토켈라우, 무료 도메인), `.gq` (적도기니), `.ml` (말리), `.cf` (중앙아프리카공화국).
              </li>
              <br />

              {/* 단축 URL의 위험 정보 */}
              <li>
                <strong>단축 URL의 위험:</strong> `bit.ly`, `tinyurl.com`, `goo.gl` 등과 같은 단축 URL들은 어디로 리다이렉트될지 미리 보이지 않으므로 주의해야 합니다. 예를 들어, `bit.ly/secure-event`는 사실 `http://phishing-login.ru`로 이어질 수 있습니다.
              </li>
              <br />

              {/* SQL Injection 정보 */}
              <li>
                <strong>SQL Injection:</strong> 대표적인 웹 해킹 기법으로, 해커가 입력창에 악의적인 SQL문을 삽입하여 데이터베이스 명령을 조작하는 공격입니다. SQL은 DB에서 데이터를 조회/수정/추가/삭제하는 언어이며, URL 쿼리문에 입력될 수 있습니다. URL 쿼리스트링은 URL 주소 뒤에 붙는 `?key=value` 형태의 데이터입니다. 예시로 `?id=100' OR '1'='1`에서 `?` 뒤의 문자열이 쿼리스트링인데, 서버는 이 값을 받아 DB에 접근합니다. 비밀번호가 들어와야 할 자리에 `OR '1'='1`이 옴으로써 입력값이 항상 참이 되어 DB에 접근할 수 있게 되고, 중요 정보를 탈취할 수 있습니다.
              </li>
            </ul>
            <button onClick={() => setShowModal(false)} className="modal-close-button">
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}