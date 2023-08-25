
import { useState } from "react";
import './App.css';
import Header from './components/Header';
import StudentList from "./components/StudentList";
import Attendance from "./components/Attendance";


function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', attendance: false, hoursAttended: 5 },
    { id: 2, name: 'Bob', attendance: false, hoursAttended: 7 },
    { id: 3, name: 'Charlie', attendance: false, hoursAttended: 4 },
  ];

  const [students, setStudents] = useState(initialStudents);
  const totalHours = 10; // Total hours of class conducted

  const handleAttendance = (studentId, isPresent) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        const newHoursAttended = isPresent
          ? Math.min(student.hoursAttended + 1, totalHours) // Increase hours attended by 1 (up to total hours)
          : Math.max(student.hoursAttended - 1, 0); // Decrease hours attended by 1 (minimum 0)

        return {
          ...student,
          attendance: isPresent,
          hoursAttended: newHoursAttended,
        };
      }
      return student;
    });

    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <header>
      <Header/>
      
      </header>
      <p>Total Hours of Class Conducted: {totalHours}</p>
      <p>Initial Student Data:</p>
      <ul>
        {initialStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.attendance ? 'Present' : 'Absent'} ({student.hoursAttended} hours attended)
          </li>
        ))}
      </ul>
      <p>Total Hours of Class Conducted: {totalHours}</p>
      <StudentList students={students} handleAttendance={handleAttendance} />
       <Attendance students={students} totalHours={totalHours} />
      
      
      
    </div>
    
  );
}

export default App;
