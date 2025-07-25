import React from 'react';

export default function StudentCard({ student }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    }}>
      <img
        src={student.photoUrl}
        alt="학생 사진"
        style={{
          width: 80,
          height: 100,
          objectFit: 'cover',
          borderRadius: 8,
          border: '2px solid #ccc',
        }}
      />
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', fontSize: 20 }}>{student.name}</p>
        <p>학번: {student.studentId}</p>
        <p>단대: {student.college}</p>
        <p>과: {student.major}</p>
        <p>발급일자: {student.issuedAt}</p>
      </div>
    </div>
  );
}