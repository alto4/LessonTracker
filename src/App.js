import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Navbar from './components/Navbar';
import Lessons from './components/Lessons';
import CreateLesson from './components/CreateLesson';
import CreateStudent from './components/CreateStudent';
import EditLesson from './components/EditLesson';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="bg-dark pb-5 text-white">
      <Router>
        <Navbar />
        <div className="container my-5">
          <Route path='/' exact component={Lessons} /> 
          <Route path='/edit/:id' exact component={EditLesson} />
          <Route path='/student/edit/:id' exact component={EditStudent} />
          <Route path='/create' exact component={CreateLesson} />
          <Route path='/student' exact component={CreateStudent} />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
