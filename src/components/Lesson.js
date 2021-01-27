import React from 'react';
import { Link } from 'react-router-dom';

const Lesson = (props) => {
  
  const { _id, student, date, length, plan, notes, resources, comments } = props.lesson;
  
  const lessonLink = `/edit/${_id}`;

  return (
   <div className="card text-center col-3 p-4 m-3">
     <h3>{student}</h3>
     <h5>{date.substring(0,10)} at 4PM <span className="small">({length}m)</span></h5>
    <p className="p-3">{plan}</p>
    <Link to={lessonLink} className="btn btn-success mb-2">Edit</Link> 
    <a href="#" className="btn btn-danger" onClick={() => { props.deleteLesson(_id) }}>Delete</a>
   </div>
  )
}

export default Lesson;
