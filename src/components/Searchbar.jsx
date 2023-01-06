import React, { useState } from 'react'
import './Searchbar.css'
//getting data from local storage
const getLocalData = () => {
    const lists = localStorage.getItem("student");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const Searchbar = () => {
    //state to find by name
    const [username, setUsername] = useState("");
    //state to find by roll no
    const [rollno, setRollno] = useState(" ");
    //state to store the find user
    const [user, setUser] = useState("");

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const list = getLocalData();
        //finding by name
        if (username) {
            const res = list.filter((item) => item.username.toLowerCase().trim() === username.toLowerCase().trim());
            if (res.length !== 0) {
                console.log(res[0]);
                setUser(res[0]);
            }
            else
                alert("Student with this name not found");
        }
    }
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        const list = getLocalData();
        //finding by roll no
        if (rollno) {
            const res = list.filter((item) => Number(item.rollno) === Number(rollno));
            console.log(res);
            if (res.length !== 0) {
                console.log(res[0]);
                setUser(res[0]);
            }
            else
                alert("Student with this roll number not found");
        }
    }

    const update = () => {
        const list = getLocalData();
        //updating local storage
        const index = list.findIndex((item) => Number(item.rollno) === Number(rollno));
        list[index] = user;
        localStorage.setItem("student", JSON.stringify(list));
        alert("Updated");
        //reload the page
        window.location.reload();
    }

    return (
        <div>
            <h1>Find the student</h1>
            <p className='instruction'>Find by Name</p>
            <form onSubmit={handleSubmit1}>
                <label htmlFor="username">Student Name</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <br />

            <p className='instruction'>Find by roll number</p>
            <form onSubmit={handleSubmit2}>
                <label htmlFor="rollno">Student Roll Number</label>
                <input type="text" id="rollno" name="rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <br />
            {
                user && <div className='user'>
                    <h1>Student Details</h1>
                    <p>Name: {user.username}</p>
                    <p>Roll Number: {user.rollno}</p>
                    <p>Status: {user.status}</p>
                    <p>Intime: {user.intime}</p>
                    <p>Outime: {user.outime}</p>
                </div>
            }
            {user.status === 'NA' &&
                <><button className="btn" onClick={() => {
                    user.status = 'Present';
                    user.intime = new Date().toLocaleTimeString();
                    setUser(user);
                    update();
                }}>Present</button> <button className="btn" onClick={() => {
                    user.status = 'Absent';
                    setUser(user);
                    update();
                }}>Absent</button></>
            }
            {user.status === 'Present' && <button className="btn" onClick={() => {
                user.status = 'Leave';
                user.outime = new Date().toLocaleTimeString();
                setUser(user);
                update();
            }}>Leave</button>}
        </div >
    )
}

export default Searchbar
