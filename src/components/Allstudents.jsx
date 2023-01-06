import React from 'react'
import './Allstudents.css'
//getting data from local storage
const getLocalData = () => {
  const lists = localStorage.getItem("student");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
}

const Allstudents = () => {
  //main array of student state
  const students = getLocalData();
  const totalStudents = students.length;
  const presentStudents = students.filter((student) => student.status === "Present").length;
  return (
    <div>
      <h1>All Students</h1>
      <div className='displayData'>
        <h2>Total Students:{totalStudents}</h2>
        <h2>Present:{presentStudents}</h2>
        <h2>Absent:{totalStudents - presentStudents}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Status</th>
            <th>In time</th>
            <th>Out time</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.rollno}>
                <td>{student.rollno}</td>
                <td>{student.username}</td>
                <td>{student.status}</td>
                <td>{student.intime}</td>
                <td>{student.outime}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Allstudents
