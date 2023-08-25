// Attendance.js
import React, { useState } from 'react';

function Attendance({ students, totalHours }) {
  const [todayData, setTodayData] = useState(Array(students.length).fill(false));

  const handleAttendance = (studentIndex, isPresent) => {
    const updatedTodayData = [...todayData];
    updatedTodayData[studentIndex] = isPresent;
    setTodayData(updatedTodayData);
  };

  return (
    <div>
      <h2>Today's Attendance</h2>
      <ul>
        {students.map((student, index) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleAttendance(index, true)}>Present</button>
            <button onClick={() => handleAttendance(index, false)}>Absent</button>
            <span>Attendance for today: {todayData[index] ? 'Present' : 'Absent'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
