import React from 'react';

function AttendanceSummary({ students, totalHours }) {
  const totalStudents = students.length;
  const totalAttended = students.filter((student) => student.attendance).length;
  const totalAbsent = totalStudents - totalAttended;
  const overallAttendancePercentage = (totalAttended / (totalHours * totalStudents)) * 100;

  return (
    <div>
      <h2>Attendance Summary</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Total Attended: {totalAttended}</p>
      <p>Total Absent: {totalAbsent}</p>
      <p>Overall Attendance Percentage: {overallAttendancePercentage.toFixed(2)}%</p>
    </div>
  );
}

export default AttendanceSummary;
