import React from 'react';
import { Link } from "react-router-dom"

const Mainpage = () => {
    return (
        <div>
            <h1>Student Attendence System</h1>
            <Link to="/students"><button>Show All students</button></Link>
            <Link to="/searchbar"><button>Find Student</button></Link>
            <Link to="/addstudent"><button>Add Student</button></Link>
        </div>
    )
}

export default Mainpage
