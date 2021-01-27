import React from 'react'

const Lesson = (props) => {
  
  const { student, date, length, plan, notes, resources, comments } = props.lesson;
  
  return (
   <div className="card text-center col-3 p-4 m-3">
     <h3>{student}</h3>
     <h5>{date.substring(0,10)} at 4PM <span className="small">({length}m)</span></h5>
    <p className="p-3">{plan}</p>
   </div>
  )
}

export default Lesson;
