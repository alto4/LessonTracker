import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
class Lessons extends Component {
  constructor(props) {
    super(props);

    this.deleteLesson = this.deleteLesson.bind(this);

    this.state = { lessons: [] };
  }  
   
  render() {
    return (
      <div>
        <h1>Lessons Index</h1>
      </div>
    )
  }
}

export default Lessons;