import React from 'react';
import AttendanceSummary from './AttendanceSummary';

function StudentList({ students, handleAttendance, totalHours }) {
    return (
      <div>
        <h2>Student List</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name}
              <button onClick={() => handleAttendance(student.id, true)}>Present</button>
              <button onClick={() => handleAttendance(student.id, false)}>Absent</button>
              <span>Attendance Percentage: {(student.hoursAttended / totalHours) * 100}%</span>
              
            </li>
          ))}
        </ul>
        <AttendanceSummary students={students} totalHours={totalHours} />
      </div>
    );
  }
  

export default StudentList;
