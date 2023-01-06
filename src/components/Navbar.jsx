import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <div className="nav-logo">Attendence Management</div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/students">Show All students</a>
                <a href="/searchbar">Find Student</a>
                <a href="/addstudent">Add Student</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;
