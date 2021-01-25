import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Navbar from './components/Navbar';
import Lessons from './components/Lessons';
import EditLesson from './components/EditLesson';
import CreateLesson from './components/CreateLesson';
import CreateStudent from './components/CreateStudent';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-5">
      <Route path='/' exact component={Lessons} /> 
      <Route path='/edit/:id' exact component={EditLesson} />
      <Route path='/create' exact component={CreateLesson} />
      <Route path='/student' exact component={CreateStudent} />
      </div>
    </Router>
  );
}

export default App;
