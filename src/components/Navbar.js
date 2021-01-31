import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <Link to="/" className="navbar-brand">Lesson Tracker</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Lessons</Link>
          </li>
          <li className="navbar-item">
            <Link to="/students" className="nav-link">Students</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Lesson Plan</Link>
          </li>
          <li className="navbar-item">
            <Link to="/student" className="nav-link">Create Student</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;