import React, { useEffect } from 'react'
import { useState } from 'react';

//getting data from local storage
const getLocalData = () => {
    const lists = localStorage.getItem("student");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const Studentform = () => {
    //main array of student state
    const [student, setstudent] = useState(getLocalData());
    //state for student name
    const [data, setData] = useState({ username: "", rollno: "", status: "NA", intime: "NA", outime: "NA" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setstudent([...student, data]);//adding student object to student array
        alert("Student Added");
        setData({ username: "", rollno: "", status: "NA", intime: "NA", outime: "NA" });
    }

    //saving data to local storage
    useEffect(() => {
        localStorage.setItem("student", JSON.stringify(student));
    }, [student])

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Add a student</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Student Name</label>
                <input type="text" id="username" value={data.username} name="username" onChange={onChange} /><br />
                <label htmlFor="rollno">Roll No</label>
                <input type="text" id="rollno" value={data.rollno} name="rollno" onChange={onChange} /><br />
                <button type="submit" style={{ cursor: 'pointer', }}>Submit</button>
            </form>
        </>
    )
}

export default Studentform
