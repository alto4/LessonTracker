import React from 'react';
import { Link } from 'react-router-dom';

const Student = (props) => {
  
  const { _id, name, instrument, email, phone } = props.student;
  
  const studentLink = `/student/edit/${_id}`;

  return (
   <div className="card text-center col-3 p-4 m-3 text-dark">
    <h3>{name} <br/>({instrument})</h3>
    <p className="p-3">{email}</p>
    <p className="p-3">{phone}</p>
    <Link to={studentLink} className="btn btn-success mb-2">Edit</Link> 
    <a href="#" className="btn btn-danger" onClick={() => { props.deleteStudent(_id) }}>Delete</a>
   </div>
  )
}

export default Student;
