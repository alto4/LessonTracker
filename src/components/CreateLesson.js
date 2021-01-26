import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';
class CreateLesson extends Component {
  constructor(props) {
    super(props);

    // Bind state to event handler callbacks
    this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLength= this.onChangeLength.bind(this);
    this.onChangePlan = this.onChangePlan.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.onChangeResources = this.onChangeResources.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State management for new lesson
    this.state = {
      student: '',
      date: new Date(),
      length: '',
      plan: '',
      notes: '',
      resources: '',
      comments: '',
      students: []
    }
  } 

  // componentDidMount
  componentDidMount() {
    axios.get('http://localhost:5000/students/')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            students: res.data.map(student => student.name),
            student: res.data[0].name
          })
        }
      })
  }
  // onChangeStudent
  onChangeStudent(e) {
    this.setState({
      student: e.target.value,
    });
  }

  // onChangeDate
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }
  
  // onChangeLength
  onChangeLength(e) {
    this.setState({
      length: e.target.value,
    });
  }

  // onChangePlan
  onChangePlan(e) {
    this.setState({
      plan: e.target.value,
    });
  }

  // onChangeNotes
  onChangeNotes(e) {
    this.setState({
      notes: e.target.value,
    });
  }

  // onChangeResources
  onChangeResources(e) {
    this.setState({
      resources: e.target.value,
    });
  }

  // onChangeComments
  onChangeComments(e) {
    this.setState({
      comments: e.target.value,
    });
  }

  // onSubmit
  onSubmit(e) {
    e.preventDefault();

    const lesson = {
      "student": this.state.student,
      "date": this.state.date,
      "length": this.state.length,
      "plan": this.state.plan,
      "notes": this.state.notes,
      "resources": this.state.resources,
      "comments": this.state.comments
    }

     console.log(lesson);

     // Add student to database
      axios.post('http://localhost:5000/lessons/add', lesson)
       .then(res => console.log(res.data));

     this.setState({
      student: '',
      length: '',
      plan: '',
      notes: '',
      resources: '',
      comments: ''
     })

     window.location ='/';
  }

  render() {
    return (
      <div>
        <h1 className="text-center mx-auto">Create Lesson</h1>
        <form className="col-lg-6 col-md-8 mx-auto" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Student: </label>
            <select
              required 
              className="form-control"
              value={this.state.student}
              onChange={this.onChangeStudent}>
              {
               this.state.students && this.state.students.map(function(student) {
                  return <option key={student} value={student}>{student}</option>
                })
              }
            </select>
          </div>
          <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker 
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
          </div>
          <div className="form-group">
              <label>Length: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.length}
                onChange={this.onChangeLength}
              />
          </div>
          <div className="form-group">
              <label>Plan: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.plan}
                onChange={this.onChangePlan}
              />
          </div>
          <div className="form-group">
              <label>Notes: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.notes}
                onChange={this.onChangeNotes}
              />
          </div>
          <div className="form-group">
              <label>Resources: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.resources}
                onChange={this.onChangeResources}
              />
          </div>
          <div className="form-group">
              <label>Comments: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.comments}
                onChange={this.onChangeComments}
              />
          </div>

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-success btn-block"/>
          </div>
        </form>        
      </div>
    )
  }
}

export default CreateLesson;
