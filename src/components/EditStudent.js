import React, { Component } from 'react';

import axios from 'axios';
class EditStudent extends Component {
  constructor(props) {
    super(props);

    // Bind state to event handler callbacks
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeInstrument = this.onChangeInstrument.bind(this);
    this.onChangeAge= this.onChangeAge.bind(this);
    this.onChangeParent = this.onChangeParent.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State management for new lesson
    this.state = {
      name: '',
      instrument: '', 
      age: 0, 
      parent: '', 
      email: '', 
      phone: '' 
    }
  } 

  // componentDidMount
  componentDidMount() {
    // Get all data for current lesson
    axios.get(`http://localhost:5000/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          name: res.data.name,
          instrument: res.data.instrument, 
          age: res.data.age, 
          parent: res.data.parent, 
          email: res.data.email, 
          phone: res.data.phone
        })       
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  // onChangeName
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  
  // onChangeInstrument
  onChangeInstrument(e) {
    this.setState({
      instrument: e.target.value,
    });
  }

  // onChangeLength
  onChangeAge(e) {
    this.setState({
      length: e.target.value,
    });
  }

  // onChangeParent
  onChangeParent(e) {
    this.setState({
      parent: e.target.value,
    });
  }

  // onChangeEmail
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  // onChangePhone
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  // onSubmit
  onSubmit(e) {
    e.preventDefault();

    const student = {
      "name": this.state.name,
      "instrument": this.state.instrument, 
      "age": this.state.age, 
      "parent": this.state.parent, 
      "email": this.state.email, 
      "phone": this.state.phone 
    }

     console.log(student);

     // Add student to database
      axios.post(`http://localhost:5000/students/update/${this.props.match.params.id}`, student)
       .then(res => console.log(res.data));

     this.setState({
      name: '',
      instrument: '',
      age: 0,
      parent: '',
      email: '',
      phone: ''
     })

     window.location ='/';
  }

  render() {
    return (
      <div>
        <h1 className="text-center mx-auto">Edit Student</h1>
        <form className="col-lg-6 col-md-8 mx-auto" onSubmit={this.onSubmit}>
          <div className="form-group">
              <label>Name: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.name}
                onChange={this.onChangeName}
              />
          </div>
          <div className="form-group">
              <label>Instrument: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.instrument}
                onChange={this.onChangeInstrument}
              />
          </div>
          <div className="form-group">
              <label>Age: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.age}
                onChange={this.onChangeAge}
              />
          </div>
          <div className="form-group">
              <label>Parent: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.parent}
                onChange={this.onChangeParent}
              />
          </div>
          <div className="form-group">
              <label>Email: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
          </div>
          <div className="form-group">
              <label>Phone: </label>
              <input 
                type="text" className="form-control" 
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit" className="btn btn-success btn-block"/>
          </div>
        </form>        
      </div>
    )
  }
}

export default EditStudent;
