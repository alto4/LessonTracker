import React, { Component } from 'react'

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

    // State management for new lesson
    this.state = {
      student: '',
      date: new Date(),
      length: '',
      plan: '',
      notes: '',
      resources: '',
      comments: '',
    }
  } 

  // componentDidMount
  componentDidMount() {
    this.setState({
      students: 'test student',
      student: 'test sutdent'
    });
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
      student: this.state.student,
      date: this.state.date,
      length: this.state.length,
      plan: this.state.plan,
      notes: this.state.notes,
      resources: this.state.resources,
      comments: this.state.comments
    }

     console.log(lesson);
  }

  render() {
    return (
      <div>
        <h1>Create Lesson</h1>
        
      </div>
    )
  }
}

export default CreateLesson;
