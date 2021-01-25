import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
class CreateStudent extends Component {
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
      instruments: ['Guitar', 'Piano', 'Bass', 'Drums', 'Ukulele', 'Theory', 'Musicianship'],
      age: '',
      parent: '',
      email: '',
      phone: ''
    }
  } 

  // componentDidMount
  componentDidMount() {
    this.setState({
      instrument: 'Guitar'
    });
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
  
  // onChangeAge
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
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

  // onChangeComments
  onChangeComments(e) {
    this.setState({
      comments: e.target.value,
    });
  }

  // onSubmit
  onSubmit(e) {
    e.preventDefault();

    const student = {
      name: this.state.name,
      instrument: this.state.instrument,
      age: this.state.age,
      parent: this.state.parent,
      email: this.state.email,
      phone: this.state.phone
    }

     console.log(student);

     window.location ='/';
  }

  render() {
    return (
      <div>
        <h1>Create Student</h1>

        <form onSubmit={this.onSubmit} >

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
            <select
              required 
              className="form-control"
              value={this.state.instrument}
              onChange={this.onChangeInstrument}>

              {
               this.state.instruments && this.state.instruments.map(function(instrument) {
                  return <option key={instrument} value={instrument}>{instrument}</option>
                })
              }
            </select>
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
            <input type="submit" value="Create" className="btn btn-success"/>
          </div>
        </form>        
      </div>
    )
  }
}

export default CreateStudent;
